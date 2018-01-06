//引入mysql第三方模块
var http = require('http');
var mysql = require('mysql');
var url = require('url');
var querystring = require('querystring');

//创建连接
var connection = mysql.createConnection({
	host: '10.40.153.110',
	user: 'lrh',
	password: '123',
	database: 'bookmanagement'
});

//进行连接数据库
connection.connect();

http.createServer((req, res) => {
	//解决跨域
	res.setHeader('Access-Control-Allow-Origin', '*');

	var query = url.parse(req.url).query;
	var param = querystring.parse(query);
	//console.log(param);

	//路由
	var pathname = url.parse(req.url).pathname;
	var post = "";
	switch(pathname) {
		//获取所有的学生信息
		case "/getstudent":
			//连接后执行——查询
			connection.query(`SELECT * FROM student`, function(error, results, fields) {
				if(error) throw error;
				//console.log(results);
				res.end(JSON.stringify(results));
			});
			break;

		//修改学生信息
		case "/editstudent":
			// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
			req.on("data", function(chunk) {
				post += chunk;
			})
			req.on("end", function() {
				post = querystring.parse(post);
				var str=`UPDATE student SET stu_name ='${post.stu_name}',sex = '${post.sex}',age ='${post.age}',major ='${post.major}',grade ='${post.grade}' where stu_id =${post.id}`;
				console.log(str)
				connection.query(str, function(error, results, fields) {
					if(error) throw error;
					//console.log(results);
					res.end(JSON.stringify({
						
					}))
				});
			})
			break;
			
		//获取所有的图书数量
		case "/getnum":
			//连接后执行——查询
			connection.query(`SELECT * FROM book`, function(error, results, fields) {
				if(error) throw error;
				//console.log(results);
				res.end(JSON.stringify(results));
			});
			break;
			
		case "/editnum":
		// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
		req.on("data", function(chunk) {
			post += chunk;
		})
		req.on("end", function() {
			post = querystring.parse(post);
			var str=`UPDATE book SET book_name ='${post.book_title}',total_num =${post.book_store},count = ${post.current_no} where book_id =${post.id}`;
			//console.log(str)
			connection.query(str, function(error, results, fields) {
				if(error) throw error;
				//console.log(results);
				res.end(JSON.stringify({
					
				}))
			});
		})
		break;
		
		/*获得借阅状态 
		case "/getstatus":
			connection.query(`SELECT * FROM borrow`, function(error, results, fields) {
				if(error) throw error;
				console.log(results);
				res.end(results);
		
			});
		break;*/
	}

}).listen(6789)

console.log('开启服务器');
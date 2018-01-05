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
	var pathname=url.parse(req.url).pathname;

	switch(pathname){
		case "/getstudent":
		connection.query(`SELECT * FROM student`, function(error, results, fields) {
			if(error) throw error;
			console.log('The solution is: ', results);
			res.end(JSON.stringify(results));
		});
		break;
		
		case "/getnum":
		connection.query(`SELECT * FROM book`, function(error, results, fields) {
			if(error) throw error;
			console.log('The solution is: ', results);
			res.end(JSON.stringify(results));
		});
		break;
	}

}).listen(6789)

console.log('开启服务器');
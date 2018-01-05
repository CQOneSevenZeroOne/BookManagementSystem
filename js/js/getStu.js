//获取学生信息
var mysql = require("mysql");
var http = require("http");
var querystring = require("querystring")
var url = require('url');
//创建数据库连接
var connect = mysql.createConnection({
	host:'10.40.153.110',
	user:'pyj',
	password:'123',
	database:'bookmanagement'
})
//开始连接
connect.connect();
//创建服务器
http.createServer(function(req, res){
	res.setHeader("Access-Control-Allow-Origin","*");
	//获取url的内容
    var query = url.parse(req.url).query;
    var params = querystring.parse(query);
    var pathname = url.parse(req.url).pathname;
	//连接后执行——查询
	switch(pathname){
		//查询所有学生信息
		case '/stu':
			connect.query('SELECT * FROM student', function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		});
		break;
		//查询借阅记录
		case '/loan':
			connect.query('SELECT * FROM borrow', function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		});
		break;
		//通过作者名查询图书信息
		case '/author':
			connect.query(`SELECT * FROM book WHERE author like '%${params.author}%'`, function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		});
		break;
		//查询未归还图书
		case '/pena':
			connect.query(`SELECT * FROM borrow WHERE fine != '0'`, function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		});
		break;
		//还款操作
		case '/pena_pay':
			connect.query(`UPDATE borrow SET fine=0 WHERE id = '${params.id}'`, function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		});
		break;
		//通过ID查询学生信息
		case '/loan_stu':
			connect.query(`SELECT * FROM student WHERE stu_id = '${params.id}'`, function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		});
		break;
		//通过ID查询图书信息
		case '/loan_book':
			connect.query(`SELECT * FROM book  WHERE book_id = '${params.id}'`, function (error, results, fields) {
			if (error) throw error;
			console.log(results)
			res.end(JSON.stringify(results));
		});
		break;
	}
    
	//关闭连接
//	connection.end();
}).listen(3000);

console.log("开始执行！");

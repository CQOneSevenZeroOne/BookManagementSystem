//通过id查找图书
var mysql = require("mysql");
var http = require("http");
var express = require("express");
var app = express();

// 处理post请求的请求体模块
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//创建数据库连接
var connect = mysql.createConnection({
	host:'10.40.153.110',
	user:'wmq',
	password:'123',
	database:'bookmanagement'
})
//开始连接
connect.connect();
//创建服务器
//查询所有图书
app.get("/getAllBook",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行——查询
	connect.query('SELECT * FROM book', function (error, results, fields) {
		console.log(results);
		if (error) throw error;
		console.log(results);
		  res.send(JSON.stringify(results));
	});
    
	//关闭连接
//	connection.end();
})
//通过id来查询图书
app.post("/getBookById",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行——查询
	console.log(req.body);
	connect.query(`SELECT * FROM book where book_id = ${req.body.bookId} `, function (error, results, fields) {
		console.log(results);
		if (error) throw error;
			console.log(results);
		res.send(JSON.stringify(results));
	});
})
//通过书名来查询图书
app.post("/getBookByName",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行——查询
	console.log(req.body);
	connect.query(`SELECT * FROM book where book_name = '${req.body.bookName}' `, function (error, results, fields) {
		console.log(results);
		if (error) throw error;
			console.log(results);
		res.send(JSON.stringify(results));
	});
})

//通过书的类别来查询图书
app.post("/getBookBySort",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行——查询
	console.log(req.body);
	connect.query(`SELECT * FROM book where sort = '${req.body.bookSort}' `, function (error, results, fields) {
		console.log(results);
		if (error) throw error;
			console.log(results);
		res.send(JSON.stringify(results));
	});
})

//查询所有的借阅记录
app.get("/getAllBorrow",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行——查询
	console.log(req.body);
	connect.query('SELECT * FROM borrow', function (error, results, fields) {
		console.log(results);
		if (error) throw error;
			console.log(results);
		res.send(JSON.stringify(results));
	});
})
//修改借阅状态
app.post("/checkStatus",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行——查询
	console.log(req.body);
	connect.query(`UPDATE borrow SET status = '${req.body.status}',fine = ${req.body.fine},current = '${req.body.current}' where id = ${req.body.borrow_id}`, function (error, results, fields) {
		console.log("success");
		if (error) throw error;
			console.log("error");
		res.send(results);
	});
})
//续借图书  修改归还时间
app.post("/changeBoorrowTime",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行——查询
	console.log(req.body);
	connect.query(`UPDATE borrow SET return_time = '${req.body.day}' where id = ${req.body.borrow_id}`, function (error, results, fields) {
		console.log("success");
		if (error) throw error;
			console.log("error");
		res.send(results);
	});
})
app.listen(3000);

console.log("开启服务器");

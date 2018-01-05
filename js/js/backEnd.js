//后端运行js文件
var mysql = require("mysql");
var http = require("http");
var express = require("express");
var app = express();
//创建数据库连接
var connect = mysql.createConnection({
	host:'10.40.153.110',
	user:'pyj',
	password:'123',
	database:'bookmanagement'
});
// 处理post请求的请求体模块
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//开始连接
connect.connect();

//查询所有学生信息
app.get("/stu",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query('SELECT * FROM student', function(error, results, fields) {
		if(error) throw error;
		res.end(JSON.stringify(results));
	});
});
//查询借阅记录
app.get("/loan",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query('SELECT * FROM borrow', function(error, results, fields) {
		if(error) throw error;
		res.end(JSON.stringify(results));
	});
});
//通过作者名查询图书信息
app.get("/author",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM book WHERE author like '%${req.query.author}%'`, function(error, results, fields) {
		if(error) throw error;
		res.end(JSON.stringify(results));
	});
});
//查询有罚款的信息
app.get("/pena",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM borrow WHERE fine != '0'`, function(error, results, fields) {
		if(error) throw error;
		res.end(JSON.stringify(results));
	});
});
//执行还款操作
app.get("/pena_pay",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`UPDATE borrow SET fine=0 WHERE id = '${req.query.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.end(JSON.stringify(results));
	});
});
//通过ID查询学生信息
app.get("/loan_stu",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM student WHERE stu_id = '${req.query.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.end(JSON.stringify(results));
	});
});
//通过ID查询图书信息
app.get("/loan_book",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM book  WHERE book_id = '${req.query.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.end(JSON.stringify(results));
	});
});
//登录验证
app.get("/login",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT id FROM maneger WHERE manager_name = '${req.query.name}' AND manager_pass = '${req.query.pass}'`, function(error, results, fields) {
		if(error) throw error;
		res.end(JSON.stringify(results));
	});
});

//监听端口
app.listen(3000);
console.log("开启服务器");
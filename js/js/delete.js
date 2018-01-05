var mysql = require("mysql");
var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var connect = mysql.createConnection({
	host: 'localhost', 
    user: 'nxx',
    password: '123456',
    database: 'bookmanagement'
})
connect.connect();
//显示图书
app.post("/showbook",function(req, res){
    res.append("Access-Control-Allow-Origin","*");
	var sql = `SELECT * FROM book`;
    connect.query(sql, function (error, results, fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
})
//删除图书
app.post("/delbook",function(req, res){
    res.append("Access-Control-Allow-Origin","*");
	var sql = `DELETE FROM book WHERE book_id=${req.body.book_id}`;
    connect.query(sql, function (error, results, fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
})
//显示学生
app.post("/showstu",function(req, res){
    res.append("Access-Control-Allow-Origin","*");
	var sql = `SELECT * FROM student`;
    connect.query(sql, function (error, results, fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
})
//删除学生
app.post("/delstu",function(req, res){
    res.append("Access-Control-Allow-Origin","*");
	var sql = `DELETE FROM student WHERE stu_id=${req.body.stu_id}`;
    connect.query(sql, function (error, results, fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
})
app.listen(6789);
console.log("开启服务器");
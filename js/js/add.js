// var http = require("http");
// var url = require("url");
// var querystring = require("querystring");
// var mysql = require("mysql");
// var connection = mysql.createConnection({
//     host: 'localhost', 
//     user: 'nxx',
//     password: '123456',
//     database: 'bookmanagement'
// });
// connection.connect();
// http.createServer(function(req,res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     var post = '';
//     req.on('data', function (chunk) {
//         post += chunk;
//     });
//     req.on('end', function () {   
//         post = querystring.parse(post);
//         var sql = `INSERT INTO book(book_id,book_name,sort,author,publish,pub_time,price,barcode,total_num,count,location) VALUES (${post.book_id},'${post.book_name}','${post.sort}','${post.author}','${post.publish}','${post.pub_time}','${post.price}','${post.barcode}',${post.total_num},${post.count},'${post.location}')`;
//         connection.query(sql, function (error, results, fields) {
//             if (error) throw error;
//             res.end(JSON.stringify(results));
//         });
       
//     });  
    
// }).listen(6789);

var mysql = require("mysql");
var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var connect = mysql.createConnection({
	host: 'localhost', 
    user: 'nxx',
    password: '123456',
    database: 'bookmanagement'
})
connect.connect();
//添加图书
app.post("/addbook",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
	var sql = `INSERT INTO book(book_id,book_name,sort,author,publish,pub_time,price,barcode,total_num,count,location) VALUES (${req.body.book_id},'${req.body.book_name}','${req.body.sort}','${req.body.author}','${req.body.publish}','${req.body.pub_time}','${req.body.price}','${req.body.barcode}',${req.body.total_num},${req.body.count},'${req.body.location}')`;
    connect.query(sql, function (error, results, fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
})
//添加学生
app.post("/addstu",function(req, res){
	res.append("Access-Control-Allow-Origin","*");
    var sql = `INSERT INTO student(stu_id, stu_name, sex, age, major, grade) VALUES (${req.body.stu_id},'${req.body.stu_name}','${req.body.sex}',${req.body.age},'${req.body.major}','${req.body.grade}')`;
    console.log(sql)
    connect.query(sql, function (error, results, fields){
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
})
app.listen(6789);
console.log("开启服务器")
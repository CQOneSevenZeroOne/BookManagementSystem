var http = require("http");
var url = require("url");
var querystring = require("querystring");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost', 
    user: 'nxx',
    password: '123456',
    database: 'bookmanagement'
});
connection.connect();
http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*")
    var post = '';
    req.on('data', function (chunk) {
        post += chunk;
    });
    req.on('end', function () {   
        post = querystring.parse(post);
        var sql = `INSERT INTO book(book_id,book_name,sort,author,publish,pub_time,price,barcode,total_num,count,location) VALUES (${post.book_id},'${post.book_name}','${post.sort}','${post.author}','${post.publish}','${post.pub_time}','${post.price}','${post.barcode}',${post.total_num},${post.count},'${post.location}')`;
        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify({
                name: results
            }))
        });
       
    });  
    
}).listen(6789);
console.log("开启服务器")
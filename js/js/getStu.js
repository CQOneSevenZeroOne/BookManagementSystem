//获取学生信息
var mysql = require("mysql");
var http = require("http");

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
	
	//连接后执行——查询
	connect.query('SELECT * FROM student', function (error, results, fields) {
		console.log(results);
		if (error) throw error;
		console.log(results);
//				  console.log('The solution is: ', results);
		  res.end(JSON.stringify(results));
	});
    
	//关闭连接
//	connection.end();
}).listen(3000);

console.log("开始执行！");

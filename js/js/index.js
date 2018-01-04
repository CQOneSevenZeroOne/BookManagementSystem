$(function(){
	//头部
	$("#header").load("html/header.html");
	
	//修改学生信息
	$("#edit").click(function(){
		$("#cont").load("html/student.html");
	})
	//修改密码
	$("#pass").click(function(){
		$("#cont").load("html/pass_change.html");
	})
//	var student_operate=$("#student_info").lastChild();
//	console.log(student_operate);
	
//	$("#student_change").load("html/student_change.html");
//	$("#book_num").load("html/book_num.html");
//	$("#book_num_change").load("html/book_num_change.html");
//	$("#lend_state").load("html/lend_state.html");
//	$("#lend_state_change").load("html/lend_state_change.html");
	
	//增加
	$("#addbook").click(function(){
		$("#cont").load("html/AddBook.html");
	})
	$("#addstu").click(function(){
		$("#cont").load("html/AddStu.html");
	})
	
	//删除
	$("#deletebook").click(function(){
		$("#cont").load("html/DeleteBook.html");
	})
	$("#deletestu").click(function(){
		$("#cont").load("html/DeleteUser.html");
	})
})
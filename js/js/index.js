$(function(){
	//头部
	$("#header").load("html/header.html");
	//查询
	/*$("#search_byAuthor").load("html/search_author.html");
	$("#stu_search").load("html/stu_search.html");
	$("#searchById").load("html/search_id.html");*/
	//修改
	$("#edit").click(function(){
		$("#cont").load("html/student.html");
	})
	
	$("#student_change").load("html/student_change.html");
	$("#book_num").load("html/book_num.html");
	$("#book_num_change").load("html/book_num_change.html");
	$("#lend_state").load("html/lend_state.html");
	$("#lend_state_change").load("html/lend_state_change.html");
	$("#pass_change").load("html/pass_change.html");*/
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
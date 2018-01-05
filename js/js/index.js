$(function(){
	//头部
	$("#header").load("html/header.html");
	//查询
	//通过id查找书
	$("#sear_byBookId").click(function(){
		$("#cont").load("html/search_id.html");
	})
	//通过书名查找书
	$("#sear_byBookName").click(function(){
		$("#cont").load("html/search_byName.html");
	})
	//通过类别查找书
	$("#sear_byBookSort").click(function(){
		$("#cont").load("html/search_byBookSort.html");
	})
	
	//修改学生信息
	$("#edit").click(function(){
		$("#cont").load("html/student.html",function(){
			$.ajax({
				type:"get",
				url:"http://localhost:6789/getstudent",
				async:true,
				dataType:"json",
				success:function(data){
					var str='';
					for(var i in data){
						str+=`<tr>
							<td>${data[i].stu_id}</td>
							<td>${data[i].stu_name}</td>
							<td>${data[i].sex}</td>
							<td>${data[i].age}</td>
							<td>${data[i].major}</td>
							<td>${data[i].grade}</td>
							<td><span class="student_info">修改</span></td>
						</tr>`
					}
					$(".bt table tbody").html(str);
						$(".student_info").click(function(){
						$("#cont").load("html/student_change.html")
						
					})
				}
			});
		
		});
	})
	//修改图书数量
	$("#loss").click(function(){
		$("#cont").load("html/book_num.html",function(){
			$.ajax({
				type:"get",
				url:"http://localhost:6789/getnum",
				async:true,
				dataType:"json",
				success:function(data){
					var str='';
					for(var i in data){
						str+=`<tr>
							<td>${data[i].book_id}</td>
							<td>${data[i].book_name}</td>
							<td>${data[i].sort}</td>
							<td>${data[i].author}</td>
							<td>${data[i].price}</td>
							<td>${data[i].total_num}</td>
							<td>${data[i].count}</td>
							<td>${data[i].location}</td>
							<td><span class="num">修改</span></td>
						</tr>`
					}
					$(".bt table tbody").html(str);
					$(".num").click(function(){
						$("#cont").load("html/book_num_change.html");
						
					})
				}
			});
			
		});
	})
	//修改密码
	$("#pass").click(function(){
		$("#cont").load("html/pass_change.html");
	})

	
	//图书状态审核
	$("#checkStatus").click(function(){
		$("#cont").load("html/check_borrowStatus.html");
	})
	//图书续借
	$("#delayBorrow").click(function(){
		$("#cont").load("html/delayBorrow.html");
	})
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

	//通过作者查询图书信息
	$("#authorSearch").click(function(){
		$("#cont").load("html/search_author.html");
	})
	//学生信息查询
	$("#stuSearch").click(function(){
		$("#cont").load("html/stu_search.html");
	})
	//借阅记录查询
	$("#loanSearch").click(function(){
		$("#cont").load("html/loaningRecord.html");
	})
	//罚款管理
	$("#pena").click(function(){
		$("#cont").load("html/penalty.html");
	})
})
$(function(){
	//头部
	$("#header").load("html/header.html");
	//查询
	//通过id查找书
	$("#sear_byBookId").click(function(){
		$("#cont").load("html/search_id.html",function(){
			//先显示所有图书的信息
			getAllBook();
			//点击查询按钮后显示图书
			$("#sBookById").click(function() {
				//如果搜索的内容为空，则直接显示所有的内容
				if($("#bookId").val()==''){
					getAllBook();
				}
				else{
					$.ajax({
						url: 'http://localhost:3000/getBookById',
						type: 'post',
						data:{
							bookId:$("#bookId").val()
						},
						dataType: 'json',
						success:function(data){
							console.log(data);
							var str = '';
							for(var i in data){
								str+=`<tr>
									<td>${data[i].book_id}</td>
									<td>${data[i].book_name}</td>
									<td>${data[i].sort}</td>
									<td>${data[i].author}</td>
									<td>${data[i].publish}</td>
									<td>${data[i].price}</td>
									<td>${data[i].barcode}</td>
									<td>${data[i].total_num}</td>
									<td>${data[i].count}</td>
									<td>${data[i].location}</td>
									<td><a href="##" class="del">删除</a><a href="" class="edit">修改</a></td>
								</tr>`
							}
							if(data.length==0){
								str="未查询到信息";
								$(".con-book table tbody").css({
									"line-height":"80px",
									"text-align":"center"
								})
							}
							$(".con-book table tbody").html(str);
						}
					})
				}
				
			});
		});
	})
	//通过书名查找书
	$("#sear_byBookName").click(function(){
		$("#cont").load("html/search_byName.html",function(){
			//先显示所有图书的信息
			getAllBook();
			//点击查询按钮后显示图书
			$("#sBookByName").click(function() {
				//如果搜索的内容为空，则直接显示所有的内容
				if($("#search_bookName").val()==''){
					getAllBook();
				}
				else{
					$.ajax({
						url: 'http://localhost:3000/getBookByName',
						type: 'post',
						data:{
							bookName:$("#search_bookName").val()
						},
						dataType: 'json',
						success:function(data){
							console.log(data);
							var str = '';
							for(var i in data){
								str+=`<tr>
									<td>${data[i].book_id}</td>
									<td>${data[i].book_name}</td>
									<td>${data[i].sort}</td>
									<td>${data[i].author}</td>
									<td>${data[i].publish}</td>
									<td>${data[i].price}</td>
									<td>${data[i].barcode}</td>
									<td>${data[i].total_num}</td>
									<td>${data[i].count}</td>
									<td>${data[i].location}</td>
									<td><a href="##" class="del">删除</a><a href="" class="edit">修改</a></td>
								</tr>`
							}
							if(data.length==0){
								str="未查询到信息";
								$(".con-book table tbody").css({
									"line-height":"80px",
									"text-align":"center"
								})
							}
							$(".con-book table tbody").html(str);
						}
					})
				}
				
			});
		});
	})
	//通过类别查找书
	$("#sear_byBookSort").click(function(){
		$("#cont").load("html/search_byBookSort.html",function(){
			//先显示所有图书的信息
			getAllBook();
			//类别的点击事件，点击哪个类别就显示某个类别的信息
			$(".book_sort_box p a").click(function(){
				console.log($(this).html());
				$.ajax({
						url: 'http://localhost:3000/getBookBySort',
						type: 'post',
						data:{
							bookSort:$(this).html()
						},
						dataType: 'json',
						success:function(data){
							console.log(data);
							var str = '';
							for(var i in data){
								str+=`<tr>
									<td>${data[i].book_id}</td>
									<td>${data[i].book_name}</td>
									<td>${data[i].sort}</td>
									<td>${data[i].author}</td>
									<td>${data[i].publish}</td>
									<td>${data[i].price}</td>
									<td>${data[i].barcode}</td>
									<td>${data[i].total_num}</td>
									<td>${data[i].count}</td>
									<td>${data[i].location}</td>
									<td><a href="##" class="del">删除</a><a href="" class="edit">修改</a></td>
								</tr>`
							}
							if(data.length==0){
								str="未查询到信息";
								$(".con-book table tbody").css({
									"line-height":"80px",
									"text-align":"center"
								})
							}
							$(".con-book table tbody").html(str);
						}
					})
			})
		});
	})
	
	//修改
	$("#edit").click(function(){
		$("#cont").load("html/student.html");
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
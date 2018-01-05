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
		$("#cont").load("html/check_borrowStatus.html",function(){
			//先获取所有的借阅记录
			$.ajax({
				url: 'http://localhost:3000/getAllBorrow',
				type: 'GET',
				dataType: 'json',
				success:function(data){
					console.log(data);
					var str = '';
					for(var i in data){
						str+=`<tr>
								<td>${data[i].id}</td>
								<td>${data[i].stu_id}</td>
								<td>${data[i].book_id}</td>
								<td>${data[i].borrow_time}</td>
								<td>${data[i].return_time}</td>
								<td class="borrow_status">${data[i].status}</td>
								<td>${data[i].fine}</td>
								<td>${data[i].current}</td>
								<td><a href="#" class="editStatus" data-status="${data[i].status}" data-id="${data[i].id}" data-return = "${data[i].return_time}">更改状态</a></td>
							</tr>`
					}
					$(".con-book table tbody").html(str);
					//如果状态为yes为绿色  为no为红色
					$.each($(".borrow_status"),function(index, el) {
						console.log($(el));
						if($(el).html()=='yes'){
						    $(el).css({"color":"green","font-weight":"800"});
						}
						if($(el).html()=='no'){
							$(el).css({"color":"red","font-weight":"800"});
						}
					});
					//点击修改状态后，修改状态并结算罚款，并确定还书时间
					$(".editStatus").click(function(){
						
						//s表示状态，fine表示罚款
						var s = '';
						var fine = 0;
						if($(this).parent().prev().prev().prev().html() == "yes"){
							s = 'no';
						}else{
							s = 'yes';
						}
						//计算还书时间和应还时间之间的天数，算出罚款
						if(timeDiff(StringTime(new Date(),"-"),$(this).attr("data-return"))>0){
							fine = Number.parseInt(Number(timeDiff(StringTime(new Date(),"-"),$(this).attr("data-return")))*0.1*10)/10;
						}else{
							fine = 0;
						}
						console.log(fine);
						console.log(s);
						//计算两个时间的天数差值
						function timeDiff(date1,date2){
							var d1 = Date.parse(date1);
							var d2 = Date.parse(date2);
							var day = Math.abs(Math.floor(d1/(24*3600*1000)) - Math.floor(d2/(24*3600*1000)));
							return day;
						}
						//将还书时间，罚款，状态更新到页面上
						$(this).parent().prev().html(StringTime(new Date(),"-"));
						$(this).parent().prev().prev().html(fine);
						$(this).parent().prev().prev().prev().html(s);
						$.each($(".borrow_status"),function(index, el) {
							console.log($(el));
							if($(el).html()=='yes'){
							    $(el).css({"color":"green","font-weight":"800"});
							}
							if($(el).html()=='no'){
								$(el).css({"color":"red","font-weight":"800"});
							}
						});
						//请求后台，后台对状态进行改变
						$.ajax({
							url: 'http://localhost:3000/checkStatus',
							type: 'post',
							dataType: 'json',
							data: {
								status: s,
								borrow_id:$(this).attr("data-id"),
								current:StringTime(new Date(),"-"),
								fine:fine
							},
							success:function(data){
								console.log(data)
							}
						})
					})
				}
			})
		});
	})
	//图书续借
	$("#delayBorrow").click(function(){
		$("#cont").load("html/delayBorrow.html",function(){
			$.ajax({
				url: 'http://localhost:3000/getAllBorrow',
				type: 'GET',
				dataType: 'json',
				success:function(data){
					console.log(data);
					var str = '';
					for(var i in data){
						str+=`<tr>
								<td>${data[i].id}</td>
								<td>${data[i].stu_id}</td>
								<td>${data[i].book_id}</td>
								<td>${data[i].borrow_time}</td>
								<td class="r_time" data-my="${data[i].id}">${data[i].return_time}</td>
								<td>${data[i].status}</td>
								<td>${data[i].fine}</td>
								<td>${data[i].current}</td>
								<td><a href="##" class="editStatus" data-id="${data[i].id}">续借</a></td>
							</tr>`
					}
					$(".con-book table tbody").html(str);
					$(".editStatus").click(function(){
						$(".filter").css('display', 'block');
						$(".alertbox").css('display', 'block');
						var return_time = new Date($(this).parent().prev().prev().prev().prev().html());
						var id =$(this).attr("data-id");
						$(".certain").click(function(){
							var val = $("#daycount").val();//获取输入的天数
							var newDate=new Date(return_time.setDate(return_time.getDate()+Number(val)));
							$.ajax({
								url: 'http://localhost:3000/changeBoorrowTime',
								type: 'post',
								dataType: 'json',
								data: {
									day: StringTime(newDate,'-'),
									borrow_id:id
								},
								success:function(data){

								}
							})
							$(".filter").css('display', 'none');
							$(".alertbox").css('display', 'none');
							$.each($(".r_time"),function(index, el) {
								if($(el).attr("data-my")==id){
									$(el).html(StringTime(newDate,'-'));
								}
							})
							
						})
					})
					
					$(".delay_back").click(function(){
						$(".filter").css('display', 'none');
						$(".alertbox").css('display', 'none');
					})
				}
			})
		});
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
	//将时间转换为字符串
	function StringTime(d,sign){
		if(!sign){
			sign = '/'
		}

		return d.getFullYear()+sign+String3num((d.getMonth()+1))+sign+String3num(d.getDate())+' '+String3num(d.getHours())+':'+String3num(d.getMinutes())+':'+String3num(d.getSeconds());
	}
	//不足2位补0
	function String3num(num){
		if(num<10){
			num = '0'+num
		}
		return num;
	}
})
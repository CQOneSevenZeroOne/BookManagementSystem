function getAllBook(){
	$.ajax({
		url: 'http://localhost:3000/',
		type: 'GET',
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
			$(".con-book table tbody").html(str);
		}
	})
}
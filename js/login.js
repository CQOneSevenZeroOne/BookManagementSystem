$(function(){
	var btn = $("#login").find('button');
	btn.click(function(){
		var name = $("#login_name").val();
		var pass = $("#login_pass").val();
		if(name.length!=0&&pass.length!=0){
			$.ajax({
				type:"get",
				url:"http://localhost:3000/login",
				data:{
					name:name,
					pass:pass
				},
				async:true,
				success:function(data){
					data = JSON.parse(data);
					if(data.length!=0){
						location.href = '../index.html';
					}
				}
			});
		}
		$("#login_name").val('');
		$("#login_pass").val('');
	})
	
})
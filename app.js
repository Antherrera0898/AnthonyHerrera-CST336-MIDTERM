let findBook = function(){
    $("#image").empty();
    var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#query-isbn").val() + "&format=json&jscmd=data";
    
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
			$("#image").append("<div class=\"img-thumbnail flex-item\"><img src=\""+data.large+"\"></div>");
		},
		error: function(err){
			console.log(err);
		}
	});
};
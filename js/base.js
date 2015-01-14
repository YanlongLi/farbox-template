$('.blog-nav a').click(function(event){
	$('.blog-nav a').removeClass('active');
	$(this).addClass('active');
	//event.preventDefault();
});

$(function () {
	$('.hidden-menu li a').each(function () {
	    var location = window.location.href;
	    var link = this.href;
	    var result = location.match(link);
	    if(result) {
	    $(this).addClass('active');
	    }
	});
});
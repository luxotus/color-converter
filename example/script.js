$(document).ready(function(){
	// Only done this way till color-converter.js is finished
	$(".color-holder").each(function(){
		var tempColor = ($(this).find("input").length) ? $(this).find("input").val() : $(this).find("p").text();
		$(this).find("span").css("background-color", tempColor);
	});
});
$(document).ready(function() {
	$(".color-list li").each(function() {
		var color = "";
		var inputVal = $(this).find("input").val().trim();

		if (inputVal.includes("rgb")) {
			color = rgbToHex(inputVal);
		}
		else if (inputVal.charAt(0) == "#") {
			color = hexToRgbA(inputVal);
		}

		if (color != "") 
		{
			$(this).find("span").css("background-color", color);
			$(this).find("p").text(color);
		}
	});

	$(document).on("change paste keyup", "input", function() {
		var inputVal = $(this).val().trim();

		if (inputVal.includes("rgb")) {
			color = rgbToHex(inputVal);
		}
		else if (inputVal.charAt(0) == "#") {
			color = hexToRgbA(inputVal);
		}

		if (color != "") 
		{
			$(this).closest("li").find("span").css("background-color", color);
			$(this).closest("li").find("p").text(color);
		}
	});
});
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// Change this basic function to handle rgba and can convert to 8 digit hex if needed
function rgbToHex(color) {
	var hexOrMessage = "";

	if (color.match(/\((.*)\)/) !== null) {
		var rgbArr = color.match(/\((.*)\)/)[1].split(",");

		if (rgbArr.length == 4) { // rgba will have 4 values

		} else {
			hexOrMessage = "#" + componentToHex(parseInt(rgbArr[0])) + componentToHex(parseInt(rgbArr[1])) + componentToHex(parseInt(rgbArr[2]));
		}
		
	}
	else {
		hexOrMessage = "not a valid rgb(#,#,#)";
	}

	return hexOrMessage;
}

// Change function to handle 8 digit hex colors, where the last 2 digits correspond to opacity
function hexToRgbA(hex){
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c= hex.substring(1).split('');
        if (c.length== 3) {
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}
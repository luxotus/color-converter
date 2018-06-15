function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function decimalToHexString(val) {
    if (val < 0) {
        val = 0xFFFFFFFF + val + 1;
    }

    return val.toString(16).toUpperCase();
}

// Change this basic function to handle rgba and can convert to 8 digit hex if needed
function rgbToHex(color) {
	if (color.match(/\((.*)\)/) !== null) {
		var rgbArr = color.match(/\((.*)\)/)[1].split(",");
        var alpha = "";

		if (rgbArr.length == 4) { // rgba
			hexStr = decimalToHexString(parseFloat(rgbArr[3]));

            if (parseInt(hexStr.charAt(4), 16) > 7) { // only using thousandths place to determine if rounding up is needed
                alpha = hexStr.charAt(2) + decimalToHexString(parseInt(hexStr.charAt(3), 16) + 1); // hex alpha is only 2 digits
            }
            else {
                alpha = hexStr.slice(2,4);
            }
		}
		
        return "#" + componentToHex(parseInt(rgbArr[0])) + componentToHex(parseInt(rgbArr[1])) + componentToHex(parseInt(rgbArr[2])) + alpha;
	}
	else {
		return false;
	}
}

function alphaHex(hex) {
	return parseFloat(parseInt((parseInt(hex)/255)*1000)/1000);
} 

function hexToRgbA(hex) {
    var c;

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) { // 3 or 6 digit hex color
        c = hex.substring(1).split('');

        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }

        c = '0x'+c.join(''); // turning to hex
        red = (c>>16)&255;
        green = (c>>8)&255;
        blue = c&255;

        return 'rgb(' + [red, green, blue].join(',') + ')';
    } else if (/^#([A-Fa-f0-9]{4}){1,2}$/.test(hex)) { // 8 digit hex color
    	c = hex.substring(1).split('');
    	c = '0x'+c.join('');
        red = (c>>24)&255;
        green = (c>>16)&255;
        blue = (c>>8)&255;;
        alpha = alphaHex(c&255);

    	return 'rgba(' + [red, green, blue].join(',') + ',' + alpha +')';
    } else {
        return false;
    }
}
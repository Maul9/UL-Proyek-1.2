function getColorCSS(c) {
  	var ele = document.createElement("div");
	ele.style.color = c;
	return ele.style.color.split(/\s+/).join('').toLowerCase();
}

function isColorValid(c) {
	var s = getColorCSS(c);
	return (s) ? true : false;
}

function isColorTransparent(c) {
	var s = getColorCSS(c);
	return (
		s === "transparent" || 
		s.substring(0,4) === "rgba" && +s.replace(/^.*,(.+)\)/,'$1') <= 0 ||
		s.substring(0,4) === "hsla" && +s.replace(/^.*,(.+)\)/,'$1') <= 0
	);
}

function isColorWhite(c) {
	var s = getColorCSS(c);
	return [
		"white",
		"rgb(255,255,255)",
		"rgba(255,255,255,1)",
		"hsl(0,0%,100%)",
		"hsla(0,0%,100%,1)"
	].indexOf(s) > -1;
}

function isColorBlack(c) {
	var s = getColorCSS(c);
	return [
		"black",
		"rgb(0,0,0)",
		"rgba(0,0,0,1)",
		"hsl(0,0%,0%)",
		"hsla(0,0%,0%,1)"
	].indexOf(s) > -1;
}

function checkColorString() {
  var c = document.getElementById("c").value;
  
  if (c === "") {
    document.getElementsByTagName("body")[0].style.backgroundColor = 'transparent';
    document.getElementById("result").innerHTML = '';
  }
  else if (isColorValid(c)) {
    if (isColorTransparent(c)) {
      document.getElementsByTagName("body")[0].style.backgroundColor = 'transparent';
      document.getElementById("result").innerHTML = '<span style="color:#dadada;">TRANSPARENT</span>';
    }
    else if (isColorWhite(c)) {
      document.getElementsByTagName("body")[0].style.backgroundColor = getColorCSS(c);
      document.getElementById("result").innerHTML = '<span style="color:black;">WHITE</span>';
    }
    else if (isColorBlack(c)) {
      document.getElementsByTagName("body")[0].style.backgroundColor = getColorCSS(c);
      document.getElementById("result").innerHTML = '<span style="color:white;">BLACK</span>';
    }
    else {
      document.getElementsByTagName("body")[0].style.backgroundColor = getColorCSS(c);
      document.getElementById("result").innerHTML = getColorCSS(c);
    }
  }
  else {
    document.getElementsByTagName("body")[0].style.backgroundColor = 'transparent';
    document.getElementById("result").innerHTML = '<span style="font-size:42px;color:#dadada;">&#9785</span>';
  }
}

var eventList = ["change", "keyup", "paste", "input", "propertychange"];
for(event of eventList) {
    document.getElementById("c").addEventListener(event, function() {
      checkColorString();
    });
}

#c {
  width: 300px;
  padding: 6px;
  font-family: courier;
}

#result {
  font-family: courier;
  font-size: 24px;
  padding: 12px 6px;
}

<input id="c" placeholder="Enter any valid CSS color..."></input>
<div id="result"></div>

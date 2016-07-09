/* MB4L CAPTAL */

//RTD ENTRANCE
function checkValidRTD() {
	var door = parseInt(document.getElementById("doormat").value, 10);
	if (door == "424242") {
		document.getElementById("crouchingHTML").style.display = "block";
		document.getElementById("logo").style.display = "none";
	}
	else {
		document.getElementById("crouchingHTML").style.display = "none";
		document.getElementById("logo").style.display = "block";
	}
}

function highlight(area) {
	switch (area) {
		case 0:
			document.getElementById("select").style="background-color:darkslategrey";
		break;
		case 1:
			document.getElementById("create").style="background-color:darkslategrey";
		break;
		case 2:
			document.getElementById("delete").style="background-color:darkslategrey";
		break;
	}
}

function unhighlight(area) {
	switch (area) {
		case 0:
			document.getElementById("select").style="background-color:slategrey";
		break;
		case 1:
			document.getElementById("create").style="background-color:slategrey";
		break;
		case 2:
			document.getElementById("delete").style="background-color:slategrey";
		break;
	}
}

function doSomething() {
	alert("something");
}
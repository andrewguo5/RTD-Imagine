instance = new SelectedClass();

function SelectedClass () {
	this.selectVar = "none";

	this.selectMethod = function (string) {
		this.selectVar = string;
	}

	this.isSelected = function (string) {
		if (string == this.selectVar) {
			return true;
		}
		else {
			return false;
		}
	}

	this.show = function() {
		alert(this.selectVar);
	}
}

function selectClass(classNumber) {
	unselectAll();
	var swordDiv = document.getElementById("sword");
	var spearDiv = document.getElementById("spear");
	var rifleDiv = document.getElementById("rifle");
	var crossDiv = document.getElementById("cross");
	var staffDiv = document.getElementById("staff");
	var heavyDiv = document.getElementById("heavy");

	switch (classNumber) {
		case 0:
		swordDiv.style="background-color:midnightblue";
		instance.selectMethod("sword");
		break;
		case 1:
		spearDiv.style="background-color:midnightblue";
		instance.selectMethod("spear");
		break;
		case 2:
		rifleDiv.style="background-color:midnightblue";
		instance.selectMethod("rifle");
		break;
		case 3:
		crossDiv.style="background-color:midnightblue";
		instance.selectMethod("cross");
		break;
		case 4:
		staffDiv.style="background-color:midnightblue";
		instance.selectMethod("staff");
		break;
		case 5:
		heavyDiv.style="background-color:midnightblue";
		instance.selectMethod("heavy");
		break;
	}


}

function displayInfo(classNumber) { 
	var swordDiv = document.getElementById("sword");
	var spearDiv = document.getElementById("spear");
	var rifleDiv = document.getElementById("rifle");
	var crossDiv = document.getElementById("cross");
	var staffDiv = document.getElementById("staff");
	var heavyDiv = document.getElementById("heavy");

	switch (classNumber) {
		case 0:
		swordDiv.style="background-color:navy";
		document.getElementById("sword_desc").style.display="block";
		break;
		case 1:
		spearDiv.style="background-color:navy";
		document.getElementById("spear_desc").style.display="block";
		break;
		case 2:
		rifleDiv.style="background-color:navy";
		document.getElementById("rifle_desc").style.display="block";
		break;
		case 3:
		crossDiv.style="background-color:navy";
		document.getElementById("cross_desc").style.display="block";
		break;
		case 4:
		staffDiv.style="background-color:navy";
		document.getElementById("staff_desc").style.display="block";
		break;
		case 5:
		heavyDiv.style="background-color:navy";
		document.getElementById("heavy_desc").style.display="block";
		break;
	}
}

function displayDesc(classNumber) {
	var descDiv;
	switch (classNumber) {
		case 0:
		descDiv = document.getElementById("sword_desc");
		break;
		case 1:
		descDiv = document.getElementById("spear_desc");
		break;
		case 2:
		descDiv = document.getElementById("rifle_desc");
		break;
		case 3:
		descDiv = document.getElementById("cross_desc");
		break;
		case 4:
		descDiv = document.getElementById("staff_desc");
		break;
		case 5:
		descDiv = document.getElementById("heavy_desc");
		break;
	}

	var x = event.clientX;
	var y = event.clientY;

	descDiv.style.top=" "+y-289+"px";
	descDiv.style.left=" "+x+"px";
}

//May not be needed
function undisplayInfo(classNumber) {
	var swordDiv = document.getElementById("sword");
	var spearDiv = document.getElementById("spear");
	var rifleDiv = document.getElementById("rifle");
	var crossDiv = document.getElementById("cross");
	var staffDiv = document.getElementById("staff");
	var heavyDiv = document.getElementById("heavy");

	switch (classNumber) {
		case 0:
		if (instance.isSelected("sword")) {
			swordDiv.style="background-color:midnightblue";
		} else {
			swordDiv.style="background-color:#111111"; 
		}
		document.getElementById("sword_desc").style.display="none";
		break;
		case 1:
		if (instance.isSelected("spear")) {
			spearDiv.style="background-color:midnightblue";
		} else {
			spearDiv.style="background-color:#111111"; 
		}
		document.getElementById("spear_desc").style.display="none";
		break;
		case 2:
		if (instance.isSelected("rifle")) {
			rifleDiv.style="background-color:midnightblue";
		} else {
			rifleDiv.style="background-color:#111111"; 
		}
		document.getElementById("rifle_desc").style.display="none";
		break;
		case 3:
		if (instance.isSelected("cross")) {
			crossDiv.style="background-color:midnightblue";
		} else {
			crossDiv.style="background-color:#111111"; 
		}
		document.getElementById("cross_desc").style.display="none";
		break;
		case 4:
		if (instance.isSelected("staff")) {
			staffDiv.style="background-color:midnightblue";
		} else {
			staffDiv.style="background-color:#111111"; 
		}
		document.getElementById("staff_desc").style.display="none";
		break;
		case 5:
		if (instance.isSelected("heavy")) {
			heavyDiv.style="background-color:midnightblue";
		} else {
			heavyDiv.style="background-color:#111111"; 
		}
		document.getElementById("heavy_desc").style.display="none";
		break;
	}
}

function doSomething() {
	instance.show();
}

function highlight(id) {
	document.getElementById(id).style="background-color:cornsilk";
}
function unhighlight(id) {
	document.getElementById(id).style="background-color:#000000";
}

function unselectAll() {
	instance.selectMethod("none");
	document.getElementById("sword").style="background-color:#111111";
	document.getElementById("spear").style="background-color:#111111";
	document.getElementById("rifle").style="background-color:#111111";
	document.getElementById("cross").style="background-color:#111111";
	document.getElementById("staff").style="background-color:#111111";
	document.getElementById("heavy").style="background-color:#111111";
}

function pageContinue(prev, next) {
	document.getElementById(prev).style.display="none";
	document.getElementById(next).style.display="block";
}

function soulColor() {
	var str = document.getElementById("str").value;
	var dex = document.getElementById("dex").value;
	var int = document.getElementById("int").value;

	document.getElementById("soul").style="background-color:"+"rgb("+str+", "+dex+", "+int+")";
}
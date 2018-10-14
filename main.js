function addClass(id, cl) {
	var e = document.getElementById(id);
	e.className += " " + cl;
}

function removeClass(id, cl) {
	var e = document.getElementById(id);
	e.classList.remove(cl);
}

Element.prototype.addClass = function(cl) {
	this.className += " " + cl;
}

Element.prototype.removeClass = function(cl) {
	this.classList.remove(cl);
}

function showBlock(id) {
	if (document.getElementById("button")) {
		
	}
	var showing = document.getElementsByClassName("showing");
	console.log(showing);
	while (showing.length > 0) {
		//removeClass(showing[i].id, "showing");
		showing[0].removeClass("showing");
	}

	/*for (i in document.getElementsByClassName("textBlock")) {
		removeClass(i.id, "showing");
	}*/
	var button = document.getElementById(id + "Tab");
	var block = document.getElementById(id + "Block");
	button.addClass("showing");
	block.addClass("showing");

}
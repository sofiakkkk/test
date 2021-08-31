var bigPic = document.querySelector("#cup");
var smallPic = document.querySelectorAll(".small");
var isOpen = false;

for (var i = 0; i < smallPic.length; i++) {
	smallPic[i].onclick = showBig;
}

function showBig() {
	var src = this.getAttribute("src");
	bigPic.setAttribute("src", src);
}

function showDetail () {
	var detail = document.getElementById("detail");

	if (isOpen == false) {
		detail.style.display = "block"
		isOpen = true;
	} else {
		detail.style.display = "none"
		isOpen = false;
	}
}
let situation;

const popup = (e) => {
	var popup = document.createElement("div");
	popup.className = "popup";
	popup.id = "test";
	var cancel = document.createElement("button");
	cancel.innerHTML = "close";
	cancel.onclick = function (e) {
		popup.parentNode.removeChild(popup);
	};
	var message = document.createElement("span");
	message.innerHTML = " Your role is: " + name + " you will now be trained!";
	popup.appendChild(message);
	popup.appendChild(cancel);
	document.body.appendChild(popup);
};

const role = document.querySelectorAll(".role").forEach((item) => {
	item.addEventListener("click", popup);
});

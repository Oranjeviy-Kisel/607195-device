	var link = document.querySelector("#write-us");
	
	var popup = document.querySelector(".modal-sendus");
	var close = popup.querySelector(".modal-close");
	
	var form = popup.querySelector("form");
	var usrname = popup.querySelector("[name=message-username]");
	var usremail = popup.querySelector("[name=message-email]");
	
	var text = popup.querySelector("[name=message-text]");
	
	
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		usrname.focus();
	});
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});
	
	form.addEventListener("submit", function (evt) {
		if (!usrname.value || !usremail.value || !text.value) {
			evt.preventDefault();
			popup.classList.add("modal-error");
			console.log("Заполните все поля!");
		}
	});
	
	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
		}
	});
	
	
	var mapLink = document.querySelector(".map-link");

	var mapPopup = document.querySelector(".modal-map");
	var mapClose = mapPopup.querySelector(".modal-close");
	
	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (mapPopup.classList.contains("modal-show")) {
				mapPopup.classList.remove("modal-show");
			}
		}
	});
	var link = document.querySelector("#write-us");
	
	var popup = document.querySelector(".modal-sendus");
	var close = popup.querySelector(".modal-close");
	
	var allform = popup.querySelector("form");
	var usrname = popup.querySelector("[name=message-username]");
	var usremail = popup.querySelector("[name=message-email]");
	
	var usrtext = popup.querySelector("[name=message-text]");
	
	
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		usrname.focus();
	});
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		usrname.classList.remove("modal-error");
		usremail.classList.remove("modal-error");
		usrtext.classList.remove("modal-error");
	});
	
	allform.addEventListener("submit", function (evt) {
		if (!usrname.value) {
			evt.preventDefault();
			usrname.classList.remove("modal-error");
			usrname.offsetWidth = usremail.offsetWidth;
			usrname.classList.add("modal-error");
		} else if (!usremail.value) {
			evt.preventDefault();
			usremail.classList.remove("modal-error");
			usremail.offsetWidth = usremail.offsetWidth;
			usremail.classList.add("modal-error");
		} else if (!usrtext.value) {
			evt.preventDefault();
			usrtext.classList.remove("modal-error");
			usrtext.offsetWidth = usrtext.offsetWidth;
			usrtext.classList.add("modal-error");
		} else {
			popup.classList.remove("modal-show");
			usrname.classList.remove("modal-error");
			usremail.classList.remove("modal-error");
			usrtext.classList.remove("modal-error");
		}
		
	});
	
	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				usrname.classList.remove("modal-error");
				usremail.classList.remove("modal-error");
				usrtext.classList.remove("modal-error");
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
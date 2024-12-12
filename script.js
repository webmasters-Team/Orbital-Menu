document.addEventListener("DOMContentLoaded", function(){
	let rise = function(trigEl) {
			trigEl.blur();

			let ul = document.querySelector("ul");

			ul.classList.add("rise");
			trigEl.classList.add("pop");

			setTimeout(function(){
				trigEl.focus();

				ul.classList.remove("rise");
				trigEl.classList.remove("pop");
			}, 1000);
		};

	this.querySelectorAll("li a").forEach(function(el){
		let rt = document.querySelector(":root"),
			di = +el.getAttribute("data-item");

		el.addEventListener("focus",function(){
			rt.style.setProperty("--rotateTimes",di);
		});
		el.addEventListener("dblclick",function(){
			rise(this);
		});
		el.addEventListener("keyup",function(e){
			if (e.keyCode === 13) {
				rise(this);
			}
		});
	});
});
const email = document.getElementById("email")
email.addEventListener("input", (event) => {
	if(email.validity.typeMistmatch) {
		email.setCustomValidity("bad email format")
	}
})

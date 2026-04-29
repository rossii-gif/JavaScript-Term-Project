document.getElementById("sub").addEventListener("click", function () {
	sessionStorage.firstname = document.getElementById("firstName").value;
	sessionStorage.lastname = document.getElementById("lastName").value;
	sessionStorage.email = document.getElementById("email").value;
	sessionStorage.phone = document.getElementById("phone").value;
	window.location.assign("localConfirm.html");
});
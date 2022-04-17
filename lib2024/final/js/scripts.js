
document.getElementById("frm").addEventListener("submit", function(event){
	event.preventDefault();
	event.stopPropagation();

	document.getElementById("pname").innerHTML = document.getElementById("name").value;
	document.getElementById("pemail").innerHTML = document.getElementById("email").value;
	document.getElementById("paddress").innerHTML = document.getElementById("address").value + ", " + document.getElementById("city").value;
	document.getElementById("ppostal").innerHTML = document.getElementById("province").value + ", " + document.getElementById("postal").value;
});
function checkForm(){
	alert("First Name:- "+document.getElementById('firstname').value);
	alert("Last Name:- "+document.getElementById('lastname').value);
	radios = document.get_form.sex;
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			alert("Sex:- "+radios[i].value);
		}
	}
	alert("Location:- "+document.getElementById('location').value);
}
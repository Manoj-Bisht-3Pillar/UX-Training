function form1(){

	var name 	= document.getElementById("name1").value;
	var email 	= document.getElementById("email1").value;
	var gender 	= "";
	var country = document.getElementById("country1").value;
	var agree 	= document.getElementById("iAgree1").checked ? "Yes" : "No";

	var genderArr = document.getElementById("frmUser1")["gender"];
	
	for(var i in genderArr){
		if(genderArr[i].checked){
			gender = genderArr[i].value;
		}
	}

	var result 	= "Name : " + name + "\n" +
				  "Email : " + email + "\n" +
				  "Gender : " + gender + "\n" +
				  "Country : " + country + "\n" +
				  "Terms Agreed : " + agree;
	
	alert(result);
}


function form2(){
	
	var name 	= document.getElementById("name2").value;
	var email 	= document.getElementById("email2").value;
	var gender 	= "";
	var country = document.getElementById("country2").value;
	var agree 	= document.getElementById("iAgree2").checked ? "Yes" : "No";

	var genderArr = document.getElementById("frmUser2")["gender"];
	
	for(var i in genderArr){
		if(genderArr[i].checked){
			gender = genderArr[i].value;
		}
	}

	var result 	= "Name : " + name + "\n" +
				  "Email : " + email + "\n" +
				  "Gender : " + gender + "\n" +
				  "Country : " + country + "\n" +
				  "Terms Agreed : " + agree;
	
	alert(result);
}
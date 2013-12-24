window.onload = function printValue()
{
var url = document.URL;
var value1 = url.split('?')[1];
value1 = value1.split('&');
alert(value1[1].split('=')[1]);
document.getElementById('title').value = value1[0].split('=')[1];
document.getElementById('fname').value = value1[1].split('=')[1];
document.getElementById('lname').value = value1[2].split('=')[1];
gender_value = value1[3].split('=')[1];
vehicle_value = value1[4].split('=')[1]
if (gender_value == 'male')
{
	document.getElementById('m').checked = true
}
else if (gender_value == 'female'){
document.getElementById('f').checked = true
}
if (vehicle_value == 'Bike')
{
	document.getElementById('b1').checked = true
}
else if (vehicle_value == 'Car'){
document.getElementById('a1').checked = true
}

}
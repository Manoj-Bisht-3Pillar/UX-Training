// JavaScript Document

// Canvas pie chart
pieDatacanvas = [
			{
				value: 3,
				color:"#4d5361"
			},
			{
				value : 5,
				color : "#ffb553"
				//
			},
			{
				value : 6,
				color : "#3097dc"
				//opera
			},{
				value : 1,
				color : "#949fb2"
				//Chrome
			},{
				value : 4,
				color : "#fa4444"
				//Firefox
			}
		
		];
var canvas = new Chart(document.getElementById("canvas").getContext("2d")).Pie(pieDatacanvas);

// SVG pie chart
pieDataSVG = [
			{
				value: 3,
				color:"#4d5361"
			},
			{
				value : 5,
				color : "#ffb553"
				//
			},
			{
				value : 6,
				color : "#3097dc"
				//opera
			},{
				value : 1,
				color : "#949fb2"
				//Chrome
			},{
				value : 4,
				color : "#fa4444"
				//Firefox
			}
		
		];
var svg = new Chart(document.getElementById("SVG").getContext("2d")).Pie(pieDataSVG);

// Drag and Drop pie chart
pieDataDD = [
			{
				value: 1,
				color:"#4d5361"
			},
			{
				value : 5,
				color : "#ffb553"
				//
			},
			{
				value : 6,
				color : "#3097dc"
				//opera
			},{
				value : 5,
				color : "#949fb2"
				//Chrome
			},{
				value : 4,
				color : "#fa4444"
				//Firefox
			}
		
		];
var svg = new Chart(document.getElementById("pieDataDD").getContext("2d")).Pie(pieDataDD);

// Geolocation pie chart
Geolocation = [
			{
				value: 1,
				color:"#4d5361"
			},
			{
				value : 4,
				color : "#ffb553"
				//
			},
			{
				value : 5,
				color : "#3097dc"
				//opera
			},{
				value : 4,
				color : "#949fb2"
				//Chrome
			},{
				value : 4,
				color : "#fa4444"
				//Firefox
			}
		
		];
var svg = new Chart(document.getElementById("Geolocation").getContext("2d")).Pie(Geolocation);
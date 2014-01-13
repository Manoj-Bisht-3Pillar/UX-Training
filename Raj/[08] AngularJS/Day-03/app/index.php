<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
  <meta charset="utf-8">
  <title>AngularJS App</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="lib/angular/angular.js"></script>
  <script src="lib/angular/angular-route.js"></script>
  <script src="js/app.js"></script>
  <script src="js/controllers.js"></script>
</head>
<body>

	<div id="wrapper">
		
		<aside>
			<nav id="menu">
				<ul>
					<li><a href="#/user-info">User Info</a></li>
					<li><a href="#/about-us">About Us</a></li>
					<li><a href="#/lorem-ipsum">Lorem Ipsum</a></li>
				</ul>
			</nav>
		</aside>

		<article id="content">

			<h1>AngularJS App</h1>
			
			<div class="container">
				
				<div ng-view></div>
			</div>

		</article>

		<div class="clr"></div>

	</div>
</body>
</html>
// "Hello, World" function
function ShowHelloWorld()
{
  // declaring new variables
  var date = new Date();
  var hour = date.getHours();

  // call DisplayGreeting 
  DisplayGreeting();

  // display greeting
  function DisplayGreeting()
  {
    if (hour >= 22 || hour <= 5) 
      document.write("Goodnight, world!");
    else
      document.write("Hello, world!");
  }
}

ShowHelloWorld();

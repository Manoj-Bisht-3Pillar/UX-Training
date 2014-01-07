var Base = function() {
   this.thing1 = "Base: thing1";
   this.thing2 = "Base: thing2";
 }
 var Derived = function() {
   this.thing1 = "Derived: thing1";
 }
 
 var b = new Base()
 Derived.prototype = b
 
 d = new Derived()
 d.thing1  // "Derived: thing1"
 d.thing2  // "Base: thing2"
 
 /* Any property defined in d will be accessed from d directly.  
 If the property does not exist in d, but it does exist in b, then it will be accessed from b via the prototype chain.*/
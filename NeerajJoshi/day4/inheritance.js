function Mammal(name){ 
    this.name=name;
    this.offspring=[];
} 
Mammal.prototype.haveABaby=function(){ 
    var newBaby=new Mammal("Baby "+this.name);
    this.offspring.push(newBaby);
    return newBaby;
}


Mammal.prototype.haveABabyDog=function(){ 
    var newBabyDog=new this.constructor("Baby "+this.name); //this line comes into play when showing Dog's baby
    this.offspring.push(newBabyDog);
    return newBabyDog;
} 


Mammal.prototype.toString=function(){ 
    return '[Mammal "'+this.name+'"]';
} 

function Dog(name){ 
    this.name=name;
}
Dog.prototype = new Mammal();        // Here's where the inheritance occurs 
Dog.prototype.constructor=Dog;       // Otherwise instances of Dog would have a constructor of Mammal 

Dog.prototype.toString=function(){ 
    return '[Dog "'+this.name+'"]';
} 


var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Dog('Canis');
alert('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
alert('myPet is '+myPet);             // results in 'myPet is [Dog "Canis"]' 

myPet.haveABaby();                    // calls a method inherited from Mammal 
alert(myPet.offspring.length);        // shows that the dog has one baby now 
alert(myPet.offspring[0]);            // results in '[Mammal "Baby Canis"]'// wrong.... 
// to get Dog baby Canis, you have to uncomment the code for haveABaby.  
myPet.haveABabyDog();
alert(myPet.offspring.length);        // shows that the dog has one baby now 
alert(myPet.offspring[1]);            // results in '[Dog "Baby Canis"]'// right.... 
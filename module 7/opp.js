/*
//class::

class Laptop{
    band='HP';
    ram=8;
    isM2=true;
    display=17.5;
    free=(total,used)=>{
        console.log(total-used);
    }

}
let LaptopObj= new Laptop;
LaptopObj.free(1245,574);
console.log(LaptopObj.display);
console.log(LaptopObj.isM2);




//Constructor:

class Laptop{
    constructor (a,b){
        console.log(a+b);
        console.log("Hi there, it's constructor")
    }
}
let Obj= new Laptop(45,5);




//static keyword

class person{
    firstName="Jace";
   static lastName="MiLER";

    static addTwo=(a,b)=>{
        console.log(a+b);
    }
}

let obj= new person();
person.addTwo(45,89);
console.log(obj.firstName);
console.log(person.lastName);


//Inheritance

class father{
    firstName="Jace";
   static lastName="MiLER";

    static addTwo=(a,b)=>{
        console.log(a+b);
    }
}

class son extends father{
    constructor (a,b){
        super();
        console.log(a+b);
        console.log("Hi there, it's constructor")
    }
}

let obj= new son(30,45);
son.addTwo(45,89);
console.log(obj.firstName);
console.log(son.lastName);

*/
//Overriding

class father{
    addTwo=(a,b)=>{console.log(a+b)}
}
class son extends father{
    addTwo=(a,b)=>{console.log(a-b)}
}
 let obj= new son();
 obj.addTwo(40,50);

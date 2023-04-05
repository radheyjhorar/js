
// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z);


// let a = 5;
// let b = 6;
// let c = x + y;
// console.log(c);


// d = 3;
// e = 4;
// f = d + e ;
// console.log(f);

// const price1 = 12;
// const price2 = 10;
// let total = price1 + price2;
// console.log(total);

// const pi = 3.14;
// let person = "Rajat Rao";
// let answer = "Yes";
// console.log(pi + "<br>" + person + "<br>" + answer);


// let pname = "rajat rao", carName = "Volvo", price = 200;
// console.log(pname + " " + carName + " " + price);

// let myName;
// console.log(myName);



// var cName = "Volvo";
// var cName;
// console.log(cName);

// let vplus = 5 + 6 + 7;
// console.log(vplus);

// let tplus = "5" + 2 + 3;
// console.log(tplus);

// let tsplus = 5 + 2 + "3";
// console.log(tsplus);




/*Object*/


/*const car = {type:"Fait", model:"500", color:"white"};
console.log("The car type is " + car.type);
console.log("The car model is " + car.model);
console.log("The car color is " + car.color);

const person = {
    firstName: "Ram",
    lastName: "Partap",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
//const person = {firstName:"Ram", lastName:"Partap", age:50, eyeColor:"Blue"};
console.log(person.firstName + " is " + person.age + " year old.");
console.log(person.firstName + " " + person.lastName);
console.log(person["firstName"] + " " + person["lastName"]);
console.log(person.fullName());
//console.log(person.fullName);*/


//Arrays 


/* const cars = [
    "BMW",
    "Volvo",
    "Audi"
];
cars[0] = "Maruti"; 
//const cars = ["BMW", "Audi", "Volvo"];
console.log(cars);
console.log(cars[2]);


const car = new Array("Volvo", "BMW", "Audi");
console.log(cars);

const person = ["Ram", "Subham", "Ravi"];
console.log(person);
console.log(person[1]);
console.log(person.length);
console.log(person[person.length -1]);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[7] = "Kiwi";
let text = "<ul>";
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach((f) => console.log(f+"\n"))

console.log(fruits + " " + fruits.length)


const persons = [];
persons["fristName"] = "Ravi";
persons["lastName"] = "Subhi";
persons["age"] = 46;
console.log(persons[0] + " " + persons.length); */


const fruits = ["Banana", "Apple", "Kiwi", "Orange", "Mango"];
//fruits.push("Lemon", "Oniun", "Potato");
//console.log(fruits);
//console.log(Array.isArray(fruits));
console.log(fruits.toString());
console.log(fruits);
console.log(fruits.join(" <?> "))
console.log(fruits);
fruits.pop();
console.log(fruits);
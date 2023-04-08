let text1 = "John Deo";
let mobileNo1 = "9518852747";
let text2 = "ramramramramram"

console.log(text1.length);
console.log(mobileNo1.length);

console.log(text1.slice(4, 16));
console.log(text1.substring(6, 10));
console.log(text2.replace("r", "R"));
// console.log(text2.replaceAll("r", "R"));
console.log(text2.toUpperCase());
console.log(text2.toLowerCase());
console.log(text2.concat(" ", mobileNo1, " ",text1));
console.log(text2.trim());
console.log(text2.trimStart());
console.log(text2.trimEnd());
console.log(text2.padEnd(18));
console.log(text2.padStart(200));
console.log(text1.charAt(0));
console.log(text1.charCodeAt(5));
console.log(text1.split(""));


let text = "Please locate where 'locate' occurs!";
let fruit = "Banana Mango Orange Kiwi";
let index = text.indexOf("locate");
console.log(text.indexOf("occurs!"));

console.log(fruit.lastIndexOf("Kiwi"));
console.log(fruit.indexOf("Kiwi"));
console.log(fruit.search("Mango"));

console.log(fruit.match("M"));

console.log(fruit.includes("Mango"));

console.log(text.includes("e "));

console.log(text.startsWith("P"));
console.log(text.endsWith("Please"));
console.log(text.endsWith("!"));


let radhey = `Hello Sir "How are 'You'"`;
let literals = `The quick
brown fox
jumps over
the lazy dog`;
console.log(literals);

let fname = "Radhey";
let lname = "Jhorar";
let wlcm = `Hello "${fname} ${lname}" Welcome`;
console.log(wlcm);

let price = 10;
let vat = 1.25;
let total = `Total: ${(price * (2 + vat)).toFixed(2)}`;

console.log(total);

let header = "Radhey Jhorar";
let tags = ["Collage Student", "9518852747", "Ellenabad"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;

console.log(html);


let x = 123e5;
let y = 123e-4;
console.log(x + " " + y);

let a = 0.2 + 0.1;
let b = (0.2*10 + 0.1*10) / 10;
console.log("0.2 + 0.1 = " + a);
console.log("0.2 + 0.1 = " + b);

var xa = 10;
var ya = 20;
console.log("The result is: " + `${xa + ya}`);

console.log(100 / "Apple");
console.log(100 / "10");
let n = 100 / "Apple" 
console.log(isNaN(n));

let na = NaN;
let no = 5;
console.log(na + no);

let ty = NaN;
console.log(typeof(ty));

let mn = 2;
let txt = "   ";
while (mn != Infinity) {
    mn *= mn;
    txt += mn;
}
console.log(txt);

let xi = 2/0;
let yi = -2/0;
console.log(xi + " " + yi);

console.log(typeof(Infinity));
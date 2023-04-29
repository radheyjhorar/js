/*let x = 999999999999999;
let y = BigInt("9999999999999999");
let xx = 9007199254740991;
let yy = 99997199254740991n;
let xy = -9007199254740991;
let yx = -99997199254740991;
console.log(typeof x);
console.log(typeof y);
console.log(typeof xx);
console.log(typeof yy);
console.log(typeof xy);
console.log(typeof yx);

let a = 9999999999999999n;
let b = 9999999999999999n;
let aa = 9999999999999999;
let bb = 9999999999999999;
let c = a * b;
let cc = aa * bb;
console.log(c);
console.log(cc);

let d = 5n;
// Error: Cannot mix BigInt and other types, use explicit conversion.
//let e = d / 2;
let e = Number(d) / 2;
console.log(e);

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(hex);
console.log(oct);
console.log(bin);

let f = 9007199254740992 === 9007199254740993;
console.log(f);

//MAX_SAFE_INTEGER
let g = Number.MAX_VALUE;
let gg = Number.MIN_VALUE;
let h = Number.MAX_SAFE_INTEGER;
let i = Number.MIN_SAFE_INTEGER;
console.log(g);
console.log(gg);
console.log(h);
console.log(i);


console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567));

let j = (123).toString();
console.log(j);
let jj = 123;
console.log(jj.toString());
console.log((100 + 23).toString());
console.log(typeof j);
console.log(typeof jj);


let k = 9.656;
//The toExponential() Method
let kk = k.toExponential(2);
console.log(kk);
console.log(k.toExponential(2));
console.log(k.toExponential(4));
console.log(k.toExponential(6));

//The toFixed() Method
console.log(k.toFixed(0));
console.log(k.toFixed(2));
console.log(k.toFixed(4));
console.log(k.toFixed(6));*/


let l = 9.656;
//The toPrecision() Method
console.log(l.toPrecision());
console.log(l.toPrecision(2));
console.log(l.toPrecision(4));
console.log(l.toPrecision(6));

//The valueOf() Method
let ll = 123;
console.log(ll.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());


console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number("  10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));


console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 6"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));


console.log("-------------")

console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 6"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));
console.log(parseFloat("years10"));



console.log("-------------")

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));



console.log("-------------")

console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.33"));
console.log(Number.parseFloat("10 20 30"));
console.log(Number.parseFloat("10 years"));
console.log(Number.parseFloat("years 10")); 



console.log("-------------")

console.log(Number.parseInt("-10"));
console.log(Number.parseInt("-10.33"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("10 6"));
console.log(Number.parseInt("10 years"));
console.log(Number.parseInt("years 10"));

console.log("-------------")


let a = 2;
let b = 2;
let isprime = true;

while (b < a) {
    if(a % b == 0){
        isprime = false;
        break;
    }
    b = b + 1;
};

if (isprime == true){
    isprime = true;
};

console.log(isprime);


console.log("-------------")



let o = Number.EPSILON;
console.log(o);








//1.returning the bigger of two numbers.
let a = 0;
let b = 2;
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

//2.returning the bigger of three numbers.
let a = 0;
let b = 2;
let c = -5;
if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}

//3.returning positive for positive value or negative for negative value.
let a = -5;
if (a > 0) {
    console.log("positive")
} else {
    console.log("negative")
}

//4. 180 triangle true or false
let a = Math.ceil(Math.random() * 60)
let b = Math.ceil(Math.random() * 60)
let c = Math.ceil(Math.random() * 60)
if (a + b + c === 180) {
    console.log("true")
} else {
    console.log("false")
}
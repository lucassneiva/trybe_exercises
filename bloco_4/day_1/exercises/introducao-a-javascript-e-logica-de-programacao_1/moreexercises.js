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

//5.chess moves
Dim UpperCase, LowerCase
Uppercase = "TOWER"
Lowercase = Lcase(UpperCase)
let towerMoves = "Horizontal and Vertical"
if (pieceTime == "Tower") {
    console.log(towerMoves)
} else {
    console.log("ERROR")
}

//6. 0-100 FOR A-F
let porcentagem = 100
if (porcentagem >= 90) {
    console.log("A")
} else if (porcentagem >= 80) {
    console.log("B")
} else if (porcentagem >= 70) {
    console.log("C")
} else if (porcentagem >= 60) {
    console.log("D")
} else if (porcentagem >= 50) {
    console.log("E")
} else if (porcentagem < 50) {
    console.log("F")
}

//7. define 3 numbers and return true if one of them is pair.
let a = 2;
let b = 7;
let c = 3;
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log("true")
} else {
    console.log("false")
}
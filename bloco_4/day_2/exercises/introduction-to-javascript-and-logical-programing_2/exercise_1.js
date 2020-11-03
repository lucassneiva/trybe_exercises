//1.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index++) {
console.log(numbers[index])
}

//2.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0
for (let index = 0; index < numbers.length; index++) {
    resultado += numbers[index]
}
console.log(resultado);

//3.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0
for (let index = 0; index < numbers.length; index++) {
    resultado += numbers[index]
    media = resultado / 10
}
console.log(media);

//4.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0
for (let index = 0; index < numbers.length; index++) {
    resultado += numbers[index]
    media = resultado / 10
}
if (media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
}

//5.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0
for (let index = 0; index < numbers.length; index++) {
    for (let cont = 0; cont < index;) {
         (numbers[index] > numbers[cont]) {
                console.log(numbers[index])
            }
        }
}
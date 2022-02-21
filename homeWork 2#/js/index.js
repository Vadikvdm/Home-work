let meaningN;
let meaningM;

do {
    meaningN = prompt("Введите значение N", 1)
} while (!meaningN)
const numberFormatN = Number(meaningN);
alert(`Является ли число целым? = ${Number.isInteger(numberFormatN)}`);
console.log(numberFormatN);

do {
    meaningM = prompt("Введите значение M", 10)
} while (!meaningM)
const numberFormatM = Number(meaningM);
alert(`Является ли число целым? = ${Number.isInteger(numberFormatM)}`);
console.log(numberFormatM);

let paritySign = confirm("Использовать парные числа?");
console.log(paritySign);


let sum = 0;

if (paritySign) {
    for (i = numberFormatN; i < numberFormatM; i++) {
        if (i % 2 !== 0) {
        continue    
        }
   console.log(i);
    }
} else {
    for (i = numberFormatN; i < numberFormatM; i++) {
        if (i % 2 == 0) {
        continue    
        }
   console.log(i);
    }
}
alert(`Результат суммы = ${sum +=i}`); //Есть у кого-то идеии, почему результат не выходит.
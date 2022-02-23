let meaningN;
let meaningM;

do {
    meaningN = +prompt("Введите значение N", 1)
} while (!Number (meaningN > 0))

alert(`Является ли число целым? = ${Number.isInteger(meaningN)}`);
console.log(meaningN);

do {
    meaningM = +prompt("Введите значение M", 10)
} while (!Number (meaningM > meaningN))

alert(`Является ли число целым? = ${Number.isInteger(meaningM)}`);
console.log(meaningM);

let paritySign = confirm("Использовать парные числа?");
console.log(paritySign);


let sum = 0;

if (paritySign) {
    for (i = meaningN; i < meaningM; i++) {
        if (i % 2 == 0) {
            sum +=i;    
        }
   console.log(i);
    }
} else {
    for (i = meaningN; i < meaningM; i++) {
        if (i % 2 !== 0) {
            sum +=i;   
        }
   console.log(i);
    }
}
alert(`Результат суммы = ${sum}`); //Есть у кого-то идеии, почему результат не выходит.
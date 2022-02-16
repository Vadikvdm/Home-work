let notebook = 15.678;
let pen = 123.965;
let eraser = 90.2345;
let payment = 500;


let produkt = [notebook, pen, eraser];




// let maxNumber = Math.max([produkt]);
// console.log(maxNumber);

let maxNumber = Math.max(notebook, pen, eraser);
console.log(maxNumber + "грн");


let minNumber = Math.min(notebook, pen, eraser);
console.log(minNumber + "грн");


let sumMaterial = (notebook + pen + eraser);
console.log(sumMaterial + "грн");

let numberRounding = Math.floor(notebook + pen + eraser);
console.log(numberRounding + "грн");

let hundredths = (Math.ceil(numberRounding / 100)) * 100;
console.log(hundredths + "грн");

let paritySign = numberRounding % 2 == 0;
console.log(paritySign);

let surrender = payment - sumMaterial;
console.log(surrender + "грн");

let mean = (sumMaterial / produkt.length).toFixed(4);
console.log(mean + "грн");

let sail = Math.random(produkt) * (10);
console.log(sail  + "грн");

let resaltSail = (sumMaterial - ((sail * sumMaterial) / 100)).toFixed(2);
console.log(resaltSail + "грн");

let netProfit = ((sumMaterial / 2) - (sumMaterial - resaltSail)).toFixed(2);
console.log(netProfit + "грн");

alert(`
Максимальная цена = ${maxNumber} грн
Минимальная цена = ${minNumber} грн
Сумарная стоимость материалов = ${sumMaterial} грн
Округленная стоимость материалов = ${numberRounding} грн
Округление до сотых = ${hundredths} грн
Характеристика целого числа (четное/нечетное) = ${paritySign}
Остаток числа = ${surrender} грн
Среднее значение = ${mean} грн
Скидка на товар = ${sail} грн
Сумма к оплате = ${resaltSail} грн
Чистая прибыль = ${netProfit} грн
`);
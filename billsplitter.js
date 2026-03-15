const totalBill = 15000;
let numberOfPeople = 4;
let tipPercent = totalBill / 10;
let totalWithTip = totalBill + tipPercent;
let pay = totalWithTip / numberOfPeople

console.log(`${"Tip Amount:"} ${tipPercent}`);
console.log(`${"Total with tip:"} ${totalWithTip}`);
console.log(`${"Each person pays:"} ${pay}`);
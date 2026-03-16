const english = 78;
const math = 85;
const science = 60;
const history = 92;
const art = 74;
let total = english + math + science + history + art;
let average = total / 5;
console.log(`${"Total :"} ${total}`);
console.log(`${"Average :"} ${average}`);

if (average >= 90) {
  console.log("Grade: A");
} else if (average >= 80) {
  console.log("Grade: B");
} else if (average >= 70) {
  console.log("Grade: C");
} else if (average >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

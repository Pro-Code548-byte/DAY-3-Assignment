let unitsUsed;
let bill;

for (let i = 1; i <= 5; i++) {
  // Assign test values manually
  if (i === 1) unitsUsed = 120;
  else if (i === 2) unitsUsed = 30;
  else if (i === 3) unitsUsed = 75;
  else if (i === 4) unitsUsed = 100;
  else if (i === 5) unitsUsed = 200;

  bill = 0;

  if (unitsUsed <= 50) {
    bill = unitsUsed * 10;
  } else if (unitsUsed <= 100) {
    bill = 50 * 10 + (unitsUsed - 50) * 15;
  } else {
    bill = 50 * 10 + 50 * 15 + (unitsUsed - 100) * 20;
  }

  console.log("Units used:", unitsUsed);
  console.log("Total bill: ₦" + bill);
  console.log("-------------");
}

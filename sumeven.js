let sum = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(`${"The sum of numbers from 1 to 50 is"} ${sum}`);

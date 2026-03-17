let count = 0;

for (let i = 8; i <= 96; i++) {
    if (i % 8 === 0) {
        console.log(i);
        count++;
    }
}

console.log("Total multiples of 8:", count);
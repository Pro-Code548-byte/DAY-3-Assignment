let word = "Mid-Term";
let letter = word.split("");
letter.reverse();
let reverse = letter.join("");
console.log (`${"Length:"} ${word.length}`)
console.log (`${"First Character:"} ${word[0]}`)
console.log (`${"Last Character:"} ${word[word.length -1]}`)
console.log (reverse)
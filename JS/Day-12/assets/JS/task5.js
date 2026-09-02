const numbers = [10, 20, 30];

const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i];
}

newNumbers[newNumbers.length] = 40;

console.log(newNumbers);
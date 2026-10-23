let numbers = [50, 20, 40, 10, 30];

numbers.sort((a, b) => a - b);

console.log(numbers);




let names = ["Ravi", "Arun", "Kumar", "Bala"];

for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
        if (names[i] > names[j]) {
            let temp = names[i];
            names[i] = names[j];
            names[j] = temp;
        }
    }
}

console.log(names);
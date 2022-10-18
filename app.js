// Exercise 1 Section

for (let i = 1; i < 101; i++){
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

// // Exercise 2 Section

for (let j = 1; j < 101; j++){
    if (j % 3 == 0 && j % 5 != 0) {
        console.log(`${j} is divisible by three so... FIZZ`);
    } else if (j % 5 == 0 && j % 3 != 0){
        console.log(`${j} is divisible by five so... BUZZ`);
    } else if (j % 5 == 0 && j % 3 == 0) {
        console.log(`${j} is divisible by five and it is also divisible by three so... FIZZBUZZ`);
    } else {
        console.log(`Sorry... This number is not divisible by five or three...`);
    }
}

// Exercise 3 Section
let i = 1;

while (i < 101){
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
    i++;
}

let j = 1;
while (j < 101){
    if (j % 3 == 0 && j % 5 != 0) {
        console.log(`${j} is divisible by three so... FIZZ`);
    } else if (j % 5 == 0 && j % 3 != 0){
        console.log(`${j} is divisible by five so... BUZZ`);
    } else if (j % 5 == 0 && j % 3 == 0) {
        console.log(`${j} is divisible by five and it is also divisible by three so... FIZZBUZZ`);
    } else {
        console.log(`Sorry... This number is not divisible by five or three...`);
    }
    j++;
}
// Exercise 4 Section
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500


let a = 0;
for (a = 0; a <= n; a++){
    if (j == value) {
        console.log(`FOUND THE NUMBER`);
        break;
    }
}
if (a != value) {
    console.log('WE never FOUND the NUMBER!');
}

// Exercise 5 Section



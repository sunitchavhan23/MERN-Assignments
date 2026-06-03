// Using For Loop
console.log("For Loop:");

for (let i = 1; i <= 50; i++) {
   console.log(i);
}

// Using While Loop
console.log("While Loop: ");
let i=1;
while (i<=50) {
    console.log(i);
    i++;
    
}

// Using For-Each Loop
console.log("ForEach Loop: ");
const numbers = [];

for (let i = 1; i <= 50; i++) {
    numbers.push(i);
}

numbers.forEach(function(num) {
    console.log(num);
});

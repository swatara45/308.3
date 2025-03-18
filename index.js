  
  // Question 1
 for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Fizz Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

    //Question 2

    // Prime check function
function isPrime(num) {
  if (num <= 1) return false;  // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) { // Check divisibility up to sqrt(num)
    if (num % i === 0) {
      return false; // If divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // If no divisors found, the number is prime
}

// Function to find and log the next prime number greater than or equal to n
function findNextPrime(n) {
  let currentNum = n;
  
  // Loop until a prime number is found
  while (true) {
    if (isPrime(currentNum)) {
      console.log(currentNum); // Log the prime number
      break; // Exit the loop once the prime is found
    }
    currentNum++; // Increment the number and check the next one
  }
}

// Test the function with different values of n
findNextPrime(4);  // Expected output: 5
findNextPrime(5);  // Expected output: 7
findNextPrime(9);  // Expected output: 11



// Question 3

let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let commas = 0;

for (let i = 0; i < str.length; i++) {
if (str[i] === ',') {
// if char is a comma, do this
commas++;
} else if (str[i] === '\n') {
//If char is a "\n", do this\
console.log(cell1, cell2, cell3, cell4);
commas = 0;
cell1 = ``;
cell2 = ``;
cell3 = ``;
cell4 = ``;

} else {
// any other char
if (commas == 0) {
// if 0 commas
cell1 += str[i];
} else if (commas == 1) {
// if 1 commas
cell2 += str[i];
} else if (commas == 2) {
// if 2 commas
cell3 += str[i];
} else {
// if 3 or more
cell4 += str[i];
}
}

if(i === str.length - 1) { // if index number is the same as length of string
console.log(cell1, cell2, cell3, cell4);
}
}

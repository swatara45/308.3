  
  // Question 1
  for (let i = 1; i <= 100; i++){
    console.log(i);
  }

  for (let i = 3; i <= 100; i+=3) {
      if (i % 3 === 0) {
        console.log(`fizz`);
      }
    }

    for (let i = 5; i <= 100; i+=5) {
      if (i % 5 === 0) {
        console.log('Buzz');
      }
    }

    for (let i = 5; i <= 100; i+=5) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz');
      }
    }

    for (let i = 5; i <= 100; i++) {
      if (i % 3 !== 0 && i % 5 !== 0) {
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

// Function to parse and log CSV data
function parseCSV(csvString) {
  let currentCell = '';
  let rowData = [];
  
  // Loop through each character in the CSV string
  for (let i = 0; i < csvString.length; i++) {
    let char = csvString[i];

    if (char === ',') {
      rowData.push(currentCell);
      currentCell = '';
    }
    
    // Handle new row (\r\n or \n): log current row and reset
    else if (char === '\n' || (csvString[i] === '\r' && csvString[i + 1] === '\n')) {
      rowData.push(currentCell);  
      console.log(...rowData);  
      rowData = [];  
      currentCell = '';  
      
      // Skip the \r character if we encounter \r\n
      if (csvString[i] === '\r') {
        i++;  // Skip next character, which is '\n'
      }
    }
    
    // Otherwise, continue accumulating characters for the current cell
    else {
      currentCell += char;
    }
  }
  
  // If there's any remaining cell data after the loop, log it
  if (currentCell.length > 0) {
    rowData.push(currentCell);
    console.log(...rowData);
  }
}

// Example CSV string (can replace with other test data)
const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

parseCSV(csvString);

switch(operand){
    case "+":
       console.log(num3 = num1 + num2);
       break;
       case '-':
        console.log(num1 - num2);
        break;
      default
}

// Counting down from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  // Outputting odd numbers from 1 to 10
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
      //0r
  for(let i = 1; i <= 10; i +=2){
    console.log(i)
  }

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  for(let i = 2; i <= 10; i +=2){
    console.log(i)
  }

  for (let i = 6; i <= 60; i+=3) {
      console.log(i);
    }
//let str = '';
for (let i = 1; i < 7; i++) {
        str += '#';
        console.log(str);
      }
    
         
 
       
  // Check even and odd numbers for numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i < 4) {
      if (i % 2 === 0) {
        console.log(`${i} is even`);
      } else {
        console.log(`${i} is odd`);
      }
    } else {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(`${i} is prime`);
      } else if (i % 2 === 0) {
        console.log(`${i} is even`);
      } else {
        console.log(`${i} is odd`);
      }
    }
  }
       //looping through Iterable
    let str = 'Hello, World!!!';
    for(let i = 0; i < str.length; i++){
        console.log(str[i])//
       }

let num = 13;
while(num>= 0){
    console.log(num);
    num--;
}

let num = 3;

while(true) {
    if (num >= 35) break;
   console.log(num);
    num += 3;
}


       for (let i = 0; i <=10; i++) {
        console.log(i);
       }

       for (let i = 3; i < 35; i+=3) {
        console.log(i);
      }

      
      for (let i = 5; i < 100; i+=5) {
        console.log(i);
      }

      
      for (let i = 0; i <= 20; i++) {
        console.log(i);
      }

      
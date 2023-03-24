// 1) convertTempature
// Sample output will says
// "Today is 80F (26.7C)." 

// This should work given any number.
// Create a function that can converts fahrenheit to celcius.
//To convert temperatures in degrees Fahrenheit to Celsius, 
//subtract 32 and multiply by .5556 (or 5/9).
const convertFahrenToCelcius = (param) => {
  const celciusRes = (param - 32) * .5556;
  const roundedRes = celciusRes.toFixed(1);
  return`Today is ${param}F (${roundedRes}C).`;  
}

const res= convertFahrenToCelcius(80);
console.log(res)


// 2) convertCurrency

// Write a function that convert Japanese Yen to Dollars.

// The output will says "100 Yen is 0.77 US Dollars". 
// This should work given any number.

const convertYenToDollars = (param) => {
  const usdRes = (param / 129.87);
  const roundedRes = usdRes.toFixed(2);
  return`Today is 100 Yen ${param} is (${roundedRes} Us Dollars).`;  
}

const res2 = convertYenToDollars(100);
console.log(res2);


// 3) getLargestNumber
// Given the array of numbers, write function returning largest number in array.

const largestInt = [2,5,7,1337,13,21,22,55,66,13,14551,41];


const maxNumFunc = arr => {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    maxNum = arr[i] > maxNum ? arr[i] : maxNum;
   
  }  
  return maxNum;
}

const maxNumResult = maxNumFunc(largestInt);
console.log(maxNumResult);


// 4) sumTotal

// Calculate the sum of all the numbers in the following array
const sumInt = [6, 1, 643, 234, 123, 4, 7, 9];

const calcTotalSum = arr => {

  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }
  return totalSum;
}

const sumResult = calcTotalSum(sumInt);
console.log(sumResult);

// 5) countOddNumber

// Given any array of numbers (all will be > 0), write a function 
// that returns the number of odd numbers in the array.

const countNumber = [1,3,7,6,13,20,2,5,33,9,14];

const oddCountFunc = arr => {
  let counter = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0){
        counter ++;
      }
   }
   return counter;
} 
const totalOdds = oddCountFunc(countNumber)
console.log(totalOdds)


// 6) Multiplication Table

// Create a multiplication table for numbers up to 10.

const multiTable = num => {
  for (let i = 0; i < 10; i++) {
     return(i);
    // for (let i = 0; i < 10; i++) {
    //     return(i)
    // }
  }
}

const res3 = console.log.table(multiTable);

// 7) isPalinadrome

// Check if a string is a palinadrome.

const isPalindrome = str => {
  const charArr = [];
  const strLowerCase = str.toLowerCase();
  const strRemoveSpace = strLowerCase.replace(/[" "]/g, "");

  for (let i = strRemoveSpace.length-1; i >= 0; i--){
    charArr.push(strRemoveSpace.charAt(i));
  }

  let  reverseStr = "";
  for (let i=0; i < charArr.length; i++) {
    reverseStr = reverseStr + charArr[i];
  }

  const res = (strRemoveSpace ===reverseStr) ? true : false;
    return res;
}

const strRes = isPalindrome('mom');
console.log(strRes);
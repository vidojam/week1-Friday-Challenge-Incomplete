// Write a function that takes a number of adults, a number of children, and
// the number of beds in a vacation home and returns true if there are enough
// beds for everyone and false if not. Assume that adults will sleep 2 to a bed.


// function enoughBeds(numAdults, numKids, numbeds) {

//     // Divide the number of adults by 2
//     const adultBeds = numAdults / 2;
//     // Add that to the number of kiddos
//     const totalBedsNeeded = adultBeds + numKids;
//     // Is that result <= number of beds
//     return (totalBedsNeeded <= numbeds) 
//     // THE LINE ABOVE IS THE SAME AS THE FIVE BELOW
//     // if (totalBedsNeeded <= numbeds){
//     // return true
//     // } else {
//     //    return false
//     // }
// }

// const canWeFit = enoughBeds(8, 4, 5);
// console.log("Can we fit?", canWeFit);

function pizzasRequired(numAdults) {
    // number of adults times 3 (numSlices = numAdults * 3)
    const numSlicesNeeded = numAdults * 3;
    // number of pies needed
    const numPiesNeeded = numSlicesNeeded/8;
    
    // round up to the nearest pie (Math.ceil * numPizzas)
    const numPizzas = Math.ceil(numPiesNeeded);
    return numPizzas
}

 //call function here
 const ourNeed = pizzasRequired(30);
 console.log("we need " + ourNeed + " pizzas.");   
        



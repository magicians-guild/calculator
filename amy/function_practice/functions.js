
// If Statements

// Examples

function containsA(word) {
    // this is a typo, change to "a" and "A" instead
    return word.includes("b") || word.includes("B");
}

// example provided with solution
function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

/* 
Write a function that returns True if the input number is positive, False if is not
Sample Input: 2
Sample Output: True
Sample Input: -30
Sample Output: False
Sample call: isPositive(2);
*/

function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

/* 
Write a function that returns True if the input number is even, False if is not
Sample Input: 2
Sample Output: True
Sample Input: 1
Sample Output: False
Sample call: isEven(3);
*/

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false
    }
}


// For Loops

/*
Write a function that takes an array of numbers and returns the maximum value in that array
Sample Input: [13, 3, 30, 44.5]
Sample Output: 44.5
Sample Call: findMax([13, 3, 30, 44.5])
*/

function findMax(array_of_numbers) {
    if (array_of_numbers.length > 0) {
        current_max = array_of_numbers[0]
        for (let i = 0; i < array_of_numbers.length; i++) {
            // if current element is bigger than the observed maximum
            if (array_of_numbers[i] > current_max) {
                // update max
                current_max = array_of_numbers[i]
            }
        }
        return current_max
    }

}

// Write a function that takes a number n and returns a string of the sequence of numbers up to n from 0

// While Loops

/*
Write a function that starts at 0 and returns the sum of the sequence up to that number
Sample Input: 6
Sample Output: 21
(because 0+1+2+3+4+5+6 = 21)
*/
function sumUpTo(target) {
    let current_sum = 0;
    let i = 0;

    while (i <= target) {
        current_sum += i;
        i++;
    }
    return current_sum;
} 

// Follow up: Write the same function using a for loop
function sumUpToForLoop(target) {
    let current_sum = 0;

    // e.g. if target = 6, loop from 0,1,2,3,4,5

    //for (let i = 0; i < target; i++) {

    // e.g. if target = 6, loop from 0,1,2,3,4,5,6


    for (let i = 0; i <= target; i++) {
        current_sum += i;
    }
    return current_sum;

} 

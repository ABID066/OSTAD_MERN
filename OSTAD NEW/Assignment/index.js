//Task Number: 1
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5)); 


//Task Number: 2
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("check odd for 7:", isOdd(7)); 
console.log("check odd for 4:", isOdd(4)); 


//Task Number: 3
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Minimum:", findMin([5, 2, 8, 1, 3])); 


//Task Number: 4
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6])); 


//Task Number: 5
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
console.log("sorted descending:", sortArrayDescending([5, 1, 8, 3, 2])); 


//Task Number: 6
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased First Letter:", lowercaseFirstLetter("HollyWOOD"));


//Task Number: 7
function findAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}
console.log("Average:", findAverage([10, 20, 30, 40, 50]));


//Task Number: 8
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Check Leap Year for 2020:", isLeapYear(2020));
console.log("Check Leap Year for 2001:", isLeapYear(2001));
console.log("Check Leap Year for 2024:", isLeapYear(2024)); 
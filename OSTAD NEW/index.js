for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 2: Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed String:", reverseString("hello")); // Output: "olleh"

// Task 3: Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Unique Array:", removeDuplicates([5, 5, 5, 6, 7])); // Output: [5, 6, 7]

// Task 4: Function to count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}
console.log("Vowel Count:", countVowels("Your Name")); // Output: 4

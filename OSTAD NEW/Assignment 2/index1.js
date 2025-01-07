//Question: 1

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Question: 2
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed String:", reverseString("hello"));



//Question: 3
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Unique Array:", removeDuplicates([1, 2, 2, 2, 4, 5, 5, 5, 44, 44, 87, 87, 99])); 



//Question: 4
function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if ('aeiouAEIOU'.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowel Count:", countVowels("Sayad Bin Kamrul"));
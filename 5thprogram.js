
let word = "121";
let reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
    reverse = reverse + word[i];
}

if (word === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
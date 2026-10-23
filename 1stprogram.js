let sentence = "apple mango Apple orange lemon mango";
let words = sentence.toLowerCase().replace(/[.,?!]/g, "").split(" ");
let result = {}
for (let i = 0; i < words.length; i++) {
    let value = words[i]
    if (result[value]) {
        (result[value]++);
    }
    else {
        result[value] = 1;
    }
}
for (value in result) {
    if (result[value] > 1) {
        console.log(value + "=" + result[value]);
    }
}
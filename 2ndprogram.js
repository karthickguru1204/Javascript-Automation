let sentence = "Hello How Are You";
let words = sentence.split(" ");
let result = "";
for (i=0 ; i<words.length ; i++){
    let word = words[i];
    let reversed  = "";
    
    for (j = word.length-1 ; j>=0 ; j-- ){
        reversed = reversed+ word[j];
    }
    result = result + reversed

    if(i <words.length-1){
    result = result + " "
    }
}

console.log(result.length)
console.log(sentence.length)
let sentance = "Apple mango apple orange mango apple.";
let word = sentance.toLowerCase().replace(/[.,?!]/g , "").split(" ");
console.log(word);
let count = {}

for (i=0 ; i < word.length ; i++){
    let value = word[i]
    if(count[value]){
        (count[value]++);

    }
    else{
        count[value]=1;
    }
}
console.log(count)

for(value in count){
    if(count[value]>1){
    console.log(value + "=" + count[value]);
    }
}

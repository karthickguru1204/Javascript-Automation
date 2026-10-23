let count = 0 ;
for (let n=2 ; n<=100 ; n++){

    for (let i=2 ; i < n ; i++) {
        if(n%i==0){
            count++;
        }
    }

if (count==0) {
    console.log(n + "is a prime number")
}else {
    console.log(n + "is not a prime number")
}
}
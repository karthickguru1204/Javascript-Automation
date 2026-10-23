let Array  = [10,20,30,10,20,40,30,50,60];
for (i=0 ; i<Array.length ; i++){
    for (j=i+1 ; j<Array.length ; j++){
        if (Array[i]===Array[j]){
            console.log(Array[i])
            break

        }
    }

}

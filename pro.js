let fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Grapes"]

fruits.push("Pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Watermelon");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(2,1);
console.log(fruits)

fruits.splice(2,0,"Kiwi");
console.log(fruits)

fruits.splice(3,1,"Papaya");
console.log(fruits)

fruits.splice(2,0,"Grape");
console.log(fruits)
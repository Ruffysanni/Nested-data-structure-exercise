// Question 1:

var nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruits", "third"],
        numberData: {
            primeNumbers: [2,3,5,7,9,11],
            fibonacci: [1,1,2,3,5,8,13]            
        },

        addSnack: function(snack){
            this.snakcs.push(snack);
            return this;
        }
    }
}

// Answers:
// i.
nestedData.innerData.numberData.primeNumbers = [2, 3, 5, 7, 11];
var objPrimeNumber = nestedData.innerData.numberData.primeNumbers;
var objPrimeNumber = [2, 3, 5, 7, 11];
objPrimeNumber = [2, 3, 5, 7, 11];

for(var i=0; i< objPrimeNumber.length; i++){
    console.log(objPrimeNumber[i]);
}


// ii.


nestedData.innerData.numberData.fibonnaci = [1, 1, 2, 3, 5, 8, 13];
var objFibonacci = nestedData.innerData.numberData.fibonnaci;
objFibonacci = [1, 1, 2, 3, 5, 8, 13];


for(var i=0; i< objFibonacci.length; i++){
    if(objFibonacci[i] % 2 === 0){
         console.log(objFibonacci[i]);
    }
   
}



// iii.

nestedData.innerData.order = ["first", "second", "third"];

var orderArray = nestedData.innerData.order;
orderArray = ["first", "second", "third"];

for(var i=2; i < orderArray.length; i++){
    console.log(orderArray[1]);
}



// iv.
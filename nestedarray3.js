// Question 3:


function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i< amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}
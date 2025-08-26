let num1 =prompt('mettez votre premier nombre');
let num2 = prompt('mettez votre second nombre');

num1 = parseInt(num1);
num2 = parseInt(num2);

if(num1 > num2 && !isNaN(num1) && !isNaN(num2) ){
    alert("first number is greater then the second number")
}else if (num1 < num2 && !isNaN(num1) && !isNaN(num2)){
    alert("first number is less then the second number ")
}else if (num1 = num2 && !isNaN(num1) && !isNaN(num2)){
    alert("they are the same number ")
}
else{
    alert("put a valid number ")
}
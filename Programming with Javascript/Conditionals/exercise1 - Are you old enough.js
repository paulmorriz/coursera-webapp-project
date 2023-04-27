var age = 64;
 if (age >= 65) {
    console.log("You get your income from your pension.");
 } else if (age < 65 && age >=18) {
    console.log("Each month you get a salary.")
 } else if (age < 18) {
    console.log("You get an allowance.")
 } else {
    console.log("The value of the age variable is not numerical")
 }



for (var firstNum = 0; firstNum <2; firstNum ++){
   for (var secondNum = 0; secondNum < 10; secondNum ++) {
      console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
   }
}

for (var i = 100; i > 10; i = i-10) {
   for (var j = 10; j > 4; j = j-5) {
       console.log(i + " divided by " + j + " equals " + i / j);
   }
}
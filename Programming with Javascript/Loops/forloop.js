for (var i = 0; i <= 4; i++) {
    console.log("This is line ", i)
}

//for loop

for (var i=1; i < 6; i++) {
    console.log(i)
}
console.log('Counting completed!');

for (var i=5; i > 0; i--) {
    console.log(i)
}
console.log('Countdown finished!');

//while loop

var counter = 1
while (counter < 6) {
    console.log(counter);
    counter = counter +1;
}
console.log('Counting completed!');

/*solution di coursera 

var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');

note bahwa iterator bisa pakai i saja atau nama lain nggak masalah
*/

var counter = 5
while (counter > 0) {
    console.log(counter);
    counter = counter -1;
}
console.log('Countdown finished!');

/* solution di coursera
var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');

note bahwa iterator bisa pakai i saja atau nama lain nggak masalah

*/

var counter = 2018
while (counter < 2023) {
    console.log(counter);
    counter = counter +1;
};

/* 
var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};

note bahwa iterator bisa pakai year tapi output sama. Harus diingat kalau kerja sama dev lain supaya pakai iterator yang
tidak membingungkan

*/
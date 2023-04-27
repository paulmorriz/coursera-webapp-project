function addTwoNums (a,b) {
    console.log(a+b);
}
addTwoNums (5, "5");


function addTwoNums(a,b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
}

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log(err)
    }
}

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")


function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder ("Gesundheit", "t")

//defensive programming

/*For this exercise, let's make sure that both of the arguments that are passed in satisfy the following criteria:

a. The length of the word parameter cannot be less than 2.

b. The length of the match parameter must be 1.

c.The type of both the word and the match parameters must be string.

*/

/*

1.Just above the for loop in the letterFinder function definition, 
declare a variable named condition1 and assign to it the following code: typeof(word) == 'string' && word.length >= 2.
2.Declare a variable named condition2 on the next line and assign to it and assign to it a check 
that makes sure that the type of match is a string AND that the length of the match variable is equal to 1.
3.Write an if statement on the next line that checks that condition1 is true, and condition2 is true
4.Move the rest of the function's body into the if statement you wrote in the previous step.
5.Code an "else" block after the "if" condition and console.log the following: "Please pass correct arguments to the function.".
6.As a failing test, run the letterFinder function and pass it with any two numbers as arguments.
7.As a passing test, run the letterFinder funciton and pass it with correct arguments, such as: letterFinder("cat", "c").
*/

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2) {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")



function add(a, b) {
    console.log(a + b)​
  }​

  add(3, "4");

  try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }
//example 1

function listArrayItems(arr){
    for(var i=0; i < arr.length; i++){
        console.log(arr [i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);


//example 2

function listArrayItems(arr){
    for(var i=0; i < arr.length; i++){
        console.log(i, arr [i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);


//example 3

function listArrayItems(arr){
    for(var i=0; i < arr.length; i++){
        console.log(i+1, arr [i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);


//example 4 

function listArrayItems(arr){
    for(var i=0; i < arr.length; i++){
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
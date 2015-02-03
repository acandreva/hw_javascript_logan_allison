function howdy () {
    console.log("Allison Logan says bonjour.")
}

howdy();


var numba = function (string) {
    if (string.length < 7) {
        console.log("What a short little word!");
    }
    else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    }
    else {
        console.log("7, what a perfect choice!")
    }
}

numba("7");
numba("seventy");
numba("university");


function inception(callback,value) {
    callback(value);
}

function execute() {
    console.log("The Wizard of Oz is a fantastic movie.");
}

inception(execute);
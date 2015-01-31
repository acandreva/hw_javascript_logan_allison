function inception(callback,value) {
    callback(value);
}

function execute() {
    console.log("The Wizard of Oz is a fantastic movie.");
}

inception(execute);
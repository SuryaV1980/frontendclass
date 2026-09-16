const processNumber = (number, callback) => {
    let result = number * 2;

    callback(result);
};

processNumber(10, (result) => {
    console.log(result);
});
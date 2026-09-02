const createCounter = () => {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    };
};

const result = createCounter();

result();
result();
result();
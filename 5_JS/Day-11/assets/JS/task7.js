const data = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});

// Using .then()
data.then((result) => {
    console.log(result);
});

// Using async/await
const loadData = async () => {
    const result = await data;
    console.log(result);
};

loadData();
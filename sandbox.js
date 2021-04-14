// async and await

const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();

    return data;
};

console.log(1);
console.log(2);

getTodos()
    .then((data) => console.log("resolved", data));

console.log(3);
console.log(4);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => {
//         console.log("resolved", response);
//         return response.json(); // promise
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("rejected", err);
//     });

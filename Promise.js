const { use } = require("react");

// Promise One
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
});

// Promise Two
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("async 2 resolved");
});

// Promise Three
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "chai", email: "chai.@com" });
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
});

// Promise Four
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: 'hitesh', password: '123' });
        } else {
            reject('error: something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

// Promise Five
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: 'js', password: '123' });
        } else {
            reject('error: js went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log("E:", error);
    }
}

consumePromiseFive();

// Fetch API Example
async function getAllUeser() {
    try {
        const response = await fetch("https://api.github.com/users/devkapilbansal");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

getAllUeser();

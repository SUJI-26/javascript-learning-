// ------------------------------------------------------
// 📌 PROMISE BASICS
// Promise → async (asynchronous) operations handle panna use agum
// Example: Server call, Database fetch, setTimeout() etc.
// States → 3 types
//   1. Pending  → Start aagum (waiting stage)
//   2. Fulfilled (Resolved) → Success aana case, data return agum
//   3. Rejected → Fail aana case la, error message return agum
// ------------------------------------------------------

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("✅ Task Completed!");  // success case
        // reject("❌ Task Failed!");   // failure case
    }, 2000);
});

// promise resolve aana result handle panna → .then()
// promise reject aana error handle panna → .catch()
promise
    .then((res) => console.log("Result:", res))
    .catch((err) => console.log("Error:", err));


// ------------------------------------------------------
// 📌 REAL LIFE PROMISE EXAMPLE (Fake API)
// ------------------------------------------------------
function getUsersPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = [
                { username: "john", email: "john@test.com" },
                { username: "jane", email: "jane@test.com" },
            ];
            resolve(users); // success case
        }, 1500);
    });
}

getUsersPromise()
    .then((users) => console.log("All Users (Promise):", users))
    .catch((err) => console.log("Error:", err));


// ------------------------------------------------------
// 📌 PROMISE PROBLEM
// Nested .then() calls → "callback hell" போல messy ஆகும்
// அதனால Async/Await வந்துச்சு
// ------------------------------------------------------


// ------------------------------------------------------
// 📌 ASYNC / AWAIT BASICS
// async function → eppovum promise return pannum
// await → promise complete aana varaikum wait pannum
// ------------------------------------------------------

function delayTask() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("✅ Delay Task Completed"), 1000);
    });
}

async function runTask() {
    console.log("Task Starting...");
    let result = await delayTask(); // wait until promise resolves
    console.log(result);
    console.log("Task Finished!");
}
runTask();


// ------------------------------------------------------
// 📌 REAL LIFE EXAMPLE with ASYNC/AWAIT
// Same getUsers but await use pannuvom
// ------------------------------------------------------

async function getUsersAsync() {
    console.log("Fetching Users with async/await...");
    const users = await getUsersPromise(); // wait for promise
    console.log("All Users (Async/Await):", users);
}
getUsersAsync();


// ------------------------------------------------------
// 📌 FIND SPECIFIC USER with ASYNC/AWAIT
// ------------------------------------------------------

async function findUser(username) {
    const users = await getUsersPromise(); // wait users
    return users.find((user) => user.username === username);
}

(async function () {
    const user = await findUser("jane");
    console.log("Found User:", user);
})();


// ------------------------------------------------------
// 📌 ERROR HANDLING in ASYNC/AWAIT
// try/catch use panna → reject case handle panna mudiyum
// ------------------------------------------------------

function getData(fail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) reject("❌ Something went wrong!");
            else resolve("✅ Data Fetched Successfully");
        }, 1000);
    });
}

async function fetchData() {
    try {
        const result = await getData(true); // true → force error
        console.log(result);
    } catch (err) {
        console.log("Error Caught:", err);
    } finally {
        console.log("Finally block always runs ✅");
    }
}
fetchData();


// ------------------------------------------------------
// 📌 PROMISE vs ASYNC/AWAIT – SUMMARY
// ------------------------------------------------------
/*
👉 Promise
   - .then() → success handle
   - .catch() → error handle
   - downside: nested .then() messy code

👉 Async/Await
   - async keyword → function promise return pannum
   - await keyword → promise resolve varaikum wait
   - try/catch → error handle easy
   - code readable, synchronous maari irukkum

✅ Real-world apps (API calls, DB queries) la mostly Async/Await prefer pannuvanga.
*/

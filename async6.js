//What is the difference between null and undefined in JavaScript?
// Solution: null is explicitly assigned by the programmer to represent the absence of a value, while undefined is the default value given to a variable that has been declared but not assigned any value.

/*

Asynchronous programming in JavaScript allows you to execute tasks without blocking the main thread, ensuring a smooth and responsive user experience. It involves executing code out of sequence, typically to handle time-consuming operations such as network requests or file operations, without pausing the execution of other code.

Here are 20 JavaScript interview questions on asynchronous programming, along with their solutions and explanations:

1. What is asynchronous programming in JavaScript?
   - Solution: Asynchronous programming allows code to execute non-sequentially, enabling concurrent execution of tasks.

2. What are promises in JavaScript?
   - Solution: Promises represent the eventual completion or failure of an asynchronous operation and allow you to handle its result using callbacks.

3. How do you create a promise in JavaScript?
   - Solution: Promises are created using the Promise constructor. You can use `new Promise((resolve, reject) => { //code // })`.

 4. Explain the concept of callbacks in JavaScript.
   - Solution: Callbacks are functions that are passed as arguments to other functions, allowing them to be executed after a certain operation or event.

5. What is the purpose of the `async` keyword in JavaScript?
   - Solution: The `async` keyword is used to define an asynchronous function, indicating that it will always return a promise.

6. How do you handle errors in asynchronous JavaScript code?
   - Solution: Errors in asynchronous code can be handled using the `catch` method on promises or by wrapping the code in a try-catch block.

7. What is the difference between `setTimeout` and `setInterval`?
   - Solution: `setTimeout` executes a function once after a specified delay, while `setInterval` executes a function repeatedly at a specified interval.

8. Explain the concept of event loop in JavaScript.
   - Solution: The event loop is a mechanism that ensures tasks are executed in the correct order, maintaining the responsiveness of the application.

9. What are the advantages of using asynchronous programming?
   - Solution: Asynchronous programming allows for non-blocking execution, improves performance by handling multiple operations concurrently, and provides a smooth user experience.

10. What is the purpose of the `await` keyword in JavaScript?
    - Solution: The `await` keyword is used to wait for a promise to resolve and can only be used inside an `async` function.

11. How do you handle multiple promises concurrently?
    - Solution: You can use `Promise.all` to handle multiple promises concurrently, which returns a single promise that resolves when all promises have resolved.

12. What are callback hell and how can you avoid it?
    - Solution: Callback hell refers to the situation when multiple nested callbacks make code hard to read and maintain. To avoid it, you can use promises, async/await, or libraries like `async` or `bluebird`.

13. Explain the difference between parallel and serial execution of asynchronous tasks.
    - Solution: Parallel execution executes multiple tasks concurrently, while serial execution waits for each task to complete before starting the next one.

14. How do you handle timeouts in JavaScript?
    - Solution: Timeouts can be handled using the `setTimeout` function and canceling the timeout with `clearTimeout`.

15. Explain the concept of AJAX and how it relates to asynchronous programming.
    - Solution: AJAX (Asynchronous JavaScript and XML) is a technique for making asynchronous HTTP requests to a server, allowing data to be retrieved without refreshing the entire web page.

16. What are generators in JavaScript and how do they relate to asynchronous programming?
    - Solution: Generators are functions that can be paused and resumed, allowing for asynchronous programming by yielding values over time.

17. What is the purpose of the `fetch` API in JavaScript?
    - Solution: The `fetch` API is used to make asynchronous network requests and returns a promise that resolves to the response.

18. How do you handle concurrency issues in asynchronous JavaScript code?
    - Solution: Concurrency issues can be handled using techniques like locks, mutexes, or employing libraries like `async` or `bluebird`.

19. Explain the concept of event-driven programming in JavaScript.
    - Solution: Event-driven programming is a paradigm where the flow of the program is determined by events that occur, and event listeners handle those events to trigger actions.

20. How do you handle race conditions in asynchronous JavaScript code?
    - Solution: Race conditions can be avoided by properly synchronizing access to shared resources using techniques like locks or by using atomic operations.

These questions cover key concepts and techniques related to asynchronous programming in JavaScript. Understanding and practicing these concepts will greatly help you in interviews and real-world scenarios involving asynchronous JavaScript programming.

*/

/*
// Problem 1: Write a function that makes an asynchronous API call and returns the result.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched");
    }, 1000);
  });
}

const fetchingLocalData = async () => {
  try {
    const data = await fetchData();
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};

fetchingLocalData(); //output Data Fetched after 1 second


// Explanation: In this solution, we define a function fetchData that returns a Promise, which resolves after a delay of 1 second. We then define an async function fetchingLocalData that uses the await keyword to wait for the Promise to resolve before logging the data. The try/catch block handles any errors that may occur during the asynchronous operation.


*/

/*

// Problem 2: Write a function that waits for multiple asynchronous operations to complete and returns their results as an array.

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`user ${userId} fetched`);
    }, Math.random() * 3000);
  });
}


async function fetchingData (userIds){
    const promises = userIds.map((userId)=>fetchUser(userId))
    console.log(promises) // Initially all Promises will be pending stage
    const results = await Promise.all(promises)
    console.log(results)
}

fetchingData([1,2,3,4])


//Explanation: In this solution, we define a function fetchUser that returns a Promise, which resolves after a random delay between 0 and 3 seconds. We then define an async function fetchAllUsers that creates an array of Promises by mapping over the userIds array and calling fetchUser for each id. We use Promise.all to wait for all the Promises to resolve, and then log the results.

*/




/*

//Problem 3: Write a function that retries an asynchronous operation a specified number of times before giving up.

function fetchData() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber < 0.2) {
      resolve("Data fetched Successfully");
    } else {
      reject("failed to fetch data");
    }
  });
}

async function retryOperation(maxTries) {
  let retries = 0;

  while (retries < maxTries) {
    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      console.error(`Attempt ${retries + 1} failed`);
      retries++;
    }
  }
  throw new Error("operation failed after maximum retries !");
}

retryOperation(3)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


  //Explanation: In this solution, we define a function fetchData that returns a Promise, which randomly resolves or rejects. We then define an async function retryOperation that uses a while loop to attempt the asynchronous operation a maximum of maxRetries times. If the operation is successful, it returns the data. If an error occurs, it logs the error and increments the retries counter. If the maximum number of retries is reached without success, it throws an error.


  */

/*

  //Problem 4: Implement a function that fetches data from multiple endpoints in parallel and combines the results.

  function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data from ${url}`);
      }, Math.random() * 3000);
    });
  }
  
  async function fetchAllData(urls) {
    const promises = urls.map((url) => fetchData(url));
    const results = await Promise.all(promises);
    console.log(results);
  }
  
  fetchAllData(["api.com/data1", "api.com/data2", "api.com/data3"]);

  //output after the certain time 
//   [
//   'Data from api.com/data1',
//   'Data from api.com/data2',
//   'Data from api.com/data3'
// ]


//Explanation: In this solution, we define a function fetchData that returns a Promise, which resolves after a random delay between 0 and 3 seconds. We then define an async function fetchAllData that creates an array of Promises by mapping over the urls array and calling fetchData for each URL. We use Promise.all to wait for all the Promises to resolve, and then log the results

*/



/*

//Problem 5: Implement a function that makes multiple API calls sequentially, each depending on the result of the previous call.


function fetchUser(userId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`User ${userId} fetched`)

        },Math.random() * 3000)
    })
}

async function fetchingUsersSequentially (userIds){
    const results = []

    for(let userId of userIds){
        const result = await fetchUser(userId)
        console.log("Result",result)
        results.push(result)
    }
    console.log(results)
}

fetchingUsersSequentially([1,2,3,4])


//Explanation: In this solution, we define a function fetchUser that returns a Promise, which resolves after a random delay between 0 and 3 seconds. We then define an async function fetchUsersSequentially that uses a for...of loop to iterate over the userIds array and makes each API call sequentially using await. The results are then stored in an array and logged.


*/
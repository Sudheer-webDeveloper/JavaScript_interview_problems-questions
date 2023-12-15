/*


Sure, here are some interview questions and problems related to localStorage in JavaScript along with their solutions and explanations:

1. What is localStorage in JavaScript?
   - Answer: localStorage is a type of web storage that allows you to store key-value pairs in the browser. The data stored in localStorage persists even after the browser is closed.

2. How can you set a value in localStorage?
   - Answer: You can set a value in localStorage using the `setItem()` method. For example: `localStorage.setItem('key', 'value');`

3. How can you retrieve a value from localStorage?
   - Answer: To retrieve a value from localStorage, you can use the `getItem()` method. For example: `const value = localStorage.getItem('key');`

4. How can you remove a value from localStorage?
   - Answer: To remove a value from localStorage, you can use the `removeItem()` method. For example: `localStorage.removeItem('key');`

5. How can you clear all the stored data in localStorage?
   - Answer: You can clear all the stored data in localStorage using the `clear()` method. For example: `localStorage.clear();`

Now, let's tackle a programming problem related to localStorage:

```



*/




/*

// Problem: Create a function that allows users to add and retrieve tasks from localStorage.

function addTask(task){
    let tasks = [];

    // Check if localStorage already has tasks
    if(localStorage.getItem('tasks')){
      tasks =   JSON.parse(localStorage.getItem('tasks'))
      console.log(tasks)
    }
    
     // Add the new task to the tasks array
    tasks.push(task)


     // Store the updated tasks array in localStorage
    localStorage.setItem('tasks',JSON.stringify(tasks));
}


addTask('Task 1')
addTask('Task 2')

function getTasks(item){
    if(localStorage.getItem(item)){
        return  JSON.parse(localStorage.getItem(item))
    }

    else{
        return []
    }
}



const tasks = getTasks("tasks")

console.log(tasks) // output tasks :["Task 1"]


/*
Explanation:
- The `addTask()` function takes a task as an argument. It first checks if there are any existing tasks stored in localStorage. If there are, it retrieves them and converts them from a JSON string to an array using `JSON.parse()`. If there are no existing tasks, it initializes an empty array.
- The new task is then added to the tasks array using the `push()` method.
- Finally, the updated tasks array is stored back in localStorage as a JSON string using `JSON.stringify()` and the `setItem()` method.
- The `getTasks()` function checks if there are any tasks stored in localStorage. If there are, it retrieves and returns them as an array using `JSON.parse()`. If there are no tasks, it returns an empty array.
- In the example usage, two tasks are added using the `addTask()` function, and then all tasks are retrieved and logged to the console using the `getTasks()` function.

*/



/*

//How to get the total number of items in localStorage? Solution: To get the total number of items in localStorage, you can use the length property. Here's an example:

const totalItems = localStorage.length;
console.log(totalItems)  

// Explanation: The length property returns the total number of items stored in localStorage. In the example, we store the value in the totalItems variable and log it to the console.
*/




/*
//Problem 7: How to iterate through all items in localStorage?
//Solution: To iterate through all items in localStorage, you can use a loop and the key(index) method.


for(let item in localStorage){
   const key = localStorage.key(item) // it wll return the key name of the item
   const value = localStorage.getItem(key)
   console.log("key",key, "value",value)
}

// or 

// for (let i = 0; i < localStorage.length; i++) {
//    const key = localStorage.key(i);
//    const value = localStorage.getItem(key);
//    console.log(key, value);
//  }


//Explanation: We use a for loop that iterates from 0 to the length of localStorage. Inside the loop, we retrieve the key using key(index) and then get the corresponding value using getItem(key). Finally, we log the key and value to the console.


*/


/*

//How to store and retrieve objects in localStorage?

//Solution: To store and retrieve objects in localStorage, you can use JSON.stringify() and JSON.parse().


const person = { name: "John", age: 30 };
localStorage.setItem('person',JSON.stringify(person))
const storedPerson = JSON.parse(localStorage.getItem("person"))


console.log(storedPerson)

// To store an object, we convert it to a string using JSON.stringify() and then use setItem() to store the string in localStorage. To retrieve the object, we use getItem() to get the string, and then convert it back to an object using JSON.parse().


*/

/*

//Problem 9: How to handle errors when using localStorage? Solution: To handle errors when using localStorage, you can use try-catch blocks. Here's an example:


try{
 localStorage.setItem('name',"sunny");
}
catch(error){
    console.log("Error", error)
}


Explanation: By wrapping the localStorage code in a try block and catching any errors in the catch block, you can handle potential errors that may occur during localStorage operations. In the example, we log the error message to the console.

*/



/*
//Problem 10: How to check if localStorage is supported in the browser? Solution: To check if localStorage is supported in the browser, you can use a conditional statement and the typeof operator. Here's an example:


if(typeof localStorage !== "undefined"){
   console.log('Localstorage is supported')
}
else{
   console.log("localStorage is not supported");
}



//Explanation: By checking the type of localStorage using typeof, we can determine if it is supported in the browser. If the type is not "undefined", it means localStorage is supported, and we log the appropriate message to the console. Otherwise, we log that it is not supported.


*/
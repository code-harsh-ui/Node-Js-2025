# [app.js](../../miniProject-To-do-app/app.js) Documentation

## <p style="color:deepskyblue;">What is happening here</p>

- This program creates a simple **Todo List App** that runs in the terminal.
- It uses Node.js'a built in `readline` module to take user input.
- You can:
  - Add tasks
  - View all tasks
  - Exit the app

## <p style="color:coral">Importing the Readline Module</p>

```js
import readline from "readline";
```

- The `readline` module allows Node.js to read input from the command line.
- Perfect for creating interactive terminal programs (like quizzes, menus, or todo apps).

## <p style="color:coral">Creating the Interface</p>

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

#### Explanation:

- `createInterface()` connects your program with the terminal.
- `input: process.stdin` - Reads user input (keyboard).
- `output: process.stdout` - Prints messages to the console.
- `rl` acts as our communication bridge with the terminal.

### <p style="color:coral;">Setting Up the Todo Array</p>

```js
const todos = [];
```

- Stores all tasks entered by the user.
- Each new task is pushed into this array.

Example:

```js
["Buy groceries", "Learn Node.js", "Go to gym"];
```

### <p style="color:coral;">Showing the Menu</p>

```js
const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("2: View Tasks");
  console.log("3: Exit");
  rl.question("Choose an option: ", handleInput);
};
```

#### Explanation:

- `showMenu()` displays a simple list of options every time.
- `rl.question()` shows a prompt asking for user input and calls.
  - `handleInput()` when the user enters something.

#### Output:

```txt
1: Add a Task
2: View Tasks
3: Exit
Choose an option:
```

---

### <p style="color:coral">Handling User Input</p>

```js
const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter the Task: ", (task) => {
      todos.push(task);
      console.log("Task Added:", task);
      showMenu();
    });
  } else if (option === "2") {
    console.log("\nYour Todo List");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (option === "3") {
    console.log("Good byee");
    rl.close();
  } else {
    console.log("Invalid Option. Please try again");
    showMenu();
  }
};
```

### <p style="color:yellow; font-size:1.7rem; font-weight:bold;">Step by Step Explanation</p>

### Step 1: Option 1 - Add a Task

```js
rl.question("Enter the Task: ", (task) => {
  todos.push(task);
  console.log("Task Added:", task);
  showMenu();
});
```

- Asks the user to type a task.
- Adds it into the `todos` array using `.push()`.
- Displays a confirmation message and returns to the menu.

#### Example Interaction:

```txt
Choose an option: 1
Enter the Task: Learn Node.js
Task Added: Learn Node.js
```

### Step 2: Option 2 - View All Tasks

```js
console.log("\nYour Todo List");
todos.forEach((task, index) => {
  console.log(`${index + 1}. ${task}`);
});
showMenu();
```

- Prints all the tasks saved in `todos` using `.forEach()`
- Displays them with a number before each item.

#### Example Output:

```txt
Your Todo List
1. Learn Node.js
2. Practice JavaScript
3. Go for a walk
```

### Step 3: Option 3 - Exit the Program

```js
console.log("Good byee");
rl.close();
```

- Ends the program and closes the `readline` interface.
- No more input can be taken after this.

#### Output:

```txt
Good byee
```

---

### <p style="color:coral;">Invalid Input Handling</p>

```js
console.log("Invalid Option. Please try again");
showMenu();
```

- If the user types something other than 1,2. or 3 - shows an error and reopens the menu.

#### Examples:

```txt
Choose an option: 8
Invalid Option. Please try again
```

### <p style="color:coral;">Running the Menu Initially</p>

```js
showMenu();
```

- Starts the application by displaying the main menu for the first time.

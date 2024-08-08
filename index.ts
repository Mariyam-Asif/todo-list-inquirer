import inquirer from "inquirer";

let todos: string[] = [];

async function createTodos(todos: string[]) {
  do {
    let ans = await inquirer.prompt({
      type: "list",
      message: "Select an action: ",
      name: "select",
      choices: ["Add a new todo", "Update an existing todo", "View all todos", "Delete a todo", "Exit"],
    });

    if (ans.select === "Add a new todo") {
      let addTodo = await inquirer.prompt({
        type: "input",
        message: "Enter a new todo:",
        name: "todo",
      });

      todos.push(addTodo.todo);
      console.log(todos);
    }

    if (ans.select === "Update an existing todo") {

    if(todos.length === 0){
        console.log("No todos to update.");
        continue;
    }
      let updateTodo = await inquirer.prompt({
        type: "list",
        name: "todo",
        message: "Select a todo to update: ",
        choices: todos,
      });

      let newTodo = await inquirer.prompt({
        type: "input",
        message: "Enter the updated todo:",
        name: "todo",
      });

      todos = todos.map((item)=>item === updateTodo.todo ? newTodo.todo : item);
      console.log(todos);
    }

    if (ans.select === "View all todos") {
        if(todos.length === 0) {
            console.log("No todos to view.")
        } else {
            console.log(todos);
        }
    }

    if (ans.select === "Delete a todo") {
        if(todos.length === 0){
            console.log("No todos available to delete");
            continue;
        }
      let deleteTodo = await inquirer.prompt({
        type: "list",
        name: "todo",
        message: "Select a todo to delete: ",
        choices: todos,
      });

      todos = todos.filter((val)=> val !== deleteTodo.todo)
      console.log(todos);
    }
    if(ans.select === "Exit"){
        break;
    }
  } while (true);
}

createTodos(todos);

import inquirer from "inquirer";
let todos = [];
async function createTodos(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an action: ",
            name: "select",
            choices: ["add", "update", "view", "delete", "exit"],
        });
        if (ans.select === "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add a new todo:",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select === "update") {
            if (todos.length === 0) {
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
                message: "Enter your updated todo:",
                name: "todo",
            });
            todos = todos.map((item) => item === updateTodo.todo ? newTodo.todo : item);
            console.log(todos);
        }
        if (ans.select === "view") {
            if (todos.length === 0) {
                console.log("No todos to view.");
            }
            else {
                console.log(todos);
            }
        }
        if (ans.select === "delete") {
            if (todos.length === 0) {
                console.log("No todos available to delete");
                continue;
            }
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Select a todo to delete: ",
                choices: todos,
            });
            todos = todos.filter((val) => val !== deleteTodo.todo);
            console.log(todos);
        }
        if (ans.select === "exit") {
            break;
        }
    } while (true);
}
createTodos(todos);

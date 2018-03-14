const toDoItem = require("./todo");
const connection = require("./mongoConnection");

const main = async () => {
    try{
        const task1 = await toDoItem.createTask("Ponder Dinosaurs","Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log("First task has been added.");
        console.log("--------------------------");
        console.log(task1);
        console.log();

        const task2 = await toDoItem.createTask("Play Pokemon with Twitch TV","Should we revive Helix?");
        console.log("Second task has been added.");
        console.log("--------------------------");
        console.log(task2);
        console.log();

        console.log("Displaying all the task.");
        console.log("-----------------------");
        const allTask = await toDoItem.getAllTasks();
        console.log(allTask);
        console.log();

        console.log("Deleting first task.");
        console.log("--------------------");
        const deleteTask = await toDoItem.removeTask(task1._id);
        console.log("First task deleted.");
        console.log();

        console.log("Displaying reamining tasks.");
        console.log("---------------------------");
        const remainingTask = await toDoItem.getAllTasks();
        console.log(remainingTask);
        console.log();

        console.log("Completing and displaying remaining task.");
        console.log("--------------------------------------------");
        const completeTask = await toDoItem.completeTask(task2._id);
        console.log(completeTask);

    }
    catch(err){
        console.log(err);
    }
};

main();
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid-v4');

const toDoModule = module.exports = {    

    async getTask(id){
        if(!id){
            throw "ID is not provided.";
        }
        const toDoCollection = await todoItems();
        const task = await toDoCollection.findOne({ _id: id });
        if (task === null) {
            throw "No task found with that id";
        }
        return task;
    },
    async getAllTasks(){
        const toDoCollection = await todoItems();
        const alltask = await toDoCollection.find({}).toArray();

        if(alltask.length === 0){
            throw "No task found.";
        }
        return alltask;
    },
    async createTask(title, description){
        if (!title){
            throw "You must provide a title for your task";
        } 
        if (!description){
            throw "You must provide a description for your task";
        } 
        if(typeof(title) !== "string" || typeof(description) !== "string"){
            throw "Title or Description must be a string.";
        }
        const toDoCollection = await todoItems();
        let id = uuidv4();
    
        let newTask = {
            _id: id,
            title: title,
            description: description,
            completed: false,
            completedAt: null
        };
    
        const insertInfo = await toDoCollection.insertOne(newTask);
        if (insertInfo.insertedCount === 0) throw "Could not add task";
    
        const newId = insertInfo.insertedId;
    
        const task = await this.getTask(newId);
        return task;
    },
    async removeTask(id) {
        if (!id) throw "You must provide an id to remove task.";
    
        const toDoCollection = await todoItems();
    
        const deletionInfo = await toDoCollection.removeOne({ _id: id });
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete task with id of ${id}`;
        }
    },
    
    async completeTask(taskId) {
        if(!taskId) throw "You must provide id for completing task"

        const todoItemsCollections = await todoItems();
        let today = new Date();
        let currentDay = (today.getMonth() + 1) + '/'+today.getDate()+'/'+today.getFullYear();
        let currentTime = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        let completedTime = currentDay +" "+currentTime;

        const updatedInfo = await todoItemsCollections.updateOne(
            { _id: taskId },
            {$set:{completed: true, completedAt: completedTime}}
        );

        if (updatedInfo.modifiedCount === 0) {
            throw "could not complete task successfully";
        }

        return await this.getTask(taskId);
    }
};

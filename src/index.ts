import _ from 'lodash';
import getTask from './functions/getTask'
import doThis from './functions/createTask'


let tasks: object[] = [];

let helloWorld: string = "Hello World!";
console.log(helloWorld)

helloWorld = "hi";

console.log(helloWorld);

const addTask = <HTMLButtonElement> document.getElementById('add-task')!;


addTask.addEventListener('click', function(){
    console.log("testing")
    getTask();
    addTask.disabled = true;
})


const addIt = <HTMLButtonElement> document.querySelector('.add-it')!;
const taskName = <HTMLInputElement> document.querySelector('.input-name');
const dueDate = <HTMLInputElement> document.querySelector('.due-date');

// if(addIt && taskName && dueDate){
// addIt.addEventListener('click', function(){
//     // e.preventDefault();
//     console.log("testing 2")
//     // const task = new doThis(taskName.value, dueDate.value)
//     // tasks.push(task)
//     console.log(tasks)
// })
// }



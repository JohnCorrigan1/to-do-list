import _ from 'lodash';
import getTask from './functions/getTask'
import createProject from './functions/newProject';

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


const newProjectButton =  <HTMLButtonElement> document.querySelector('.add-project')!

newProjectButton.addEventListener('click', function(){
   console.log("testing 2")
    createProject();
    newProjectButton.disabled = true;
})
import _ from 'lodash';
import getTask from './functions/getTask'

// import './style.css';


let helloWorld: string = "Hello World!";
console.log(helloWorld)

helloWorld = "hi";

console.log(helloWorld);

const addTask = <HTMLButtonElement> document.getElementById('add-task')!;


addTask.addEventListener('click', function(e){
    console.log("testing")
    getTask();
    addTask.disabled = true;
})


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

    // const projectNameInput = document.createElement('input')!
    // projectNameInput.classList.add('project-name-input')

    // const projectNameLabel = document.createElement('label')!
    // projectNameLabel.classList.add('label')
    // projectNameLabel.textContent = "Project Name:"

    // const addProject = document.querySelector('.add3')!
    // addProject.appendChild(projectNameLabel)
    // addProject.appendChild(projectNameInput)


})
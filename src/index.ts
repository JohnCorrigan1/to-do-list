import _ from 'lodash';
import getTask from './functions/getTask'
import createProject from './functions/newProject';

let helloWorld: string = "Hello World!";
console.log(helloWorld)

helloWorld = "hi";

console.log(helloWorld);

const addTask = <HTMLButtonElement> document.getElementById('add-task')!;
const newProjectButton =  <HTMLButtonElement> document.querySelector('.add-project')!
const hamburger = document.querySelector('.hamburger')!
const hamburgerNav = <HTMLDivElement> document.querySelector('.hamburger-nav')!

addTask.addEventListener('click', function(){
    console.log("testing")
    getTask();
    addTask.disabled = true;
})

newProjectButton.addEventListener('click', function(){
   console.log("testing 2")
    createProject();
    newProjectButton.disabled = true;
})

let isActive: boolean = false
hamburger.addEventListener('click', function(){
    if(!isActive){
        hamburgerNav.classList.remove("hamburger-nav")
        hamburgerNav.classList.add("active")
        isActive = true
    }
    else{
        hamburgerNav.classList.remove("active")
        hamburgerNav.classList.add("hamburger-nav")
        isActive = false
    }
    // }
    // else if(hamburgerNav.style.display = "flex"){
    //     hamburgerNav.classList.remove("active")
    //     hamburgerNav.classList.add("hamburger-nav")
    // }
})
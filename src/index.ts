import _ from 'lodash';
import getTask from './functions/getTask'
import Project, { createProject }from './functions/newProject';
import doThis from './functions/createTask';

const allTasks: doThis[] = []
let projectList: string[] = [];

const addTask = <HTMLButtonElement> document.getElementById('add-task')!;
const newProjectButton =  <HTMLButtonElement> document.querySelector('.add-project')!
const hamburger = document.querySelector('.hamburger')!
const sidebar = <HTMLDivElement> document.querySelector('.sidebar')!
let windowSize = window.matchMedia("(min-width: 601px)")


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
        sidebar.classList.remove("sidebar")
        sidebar.classList.add("sidebar-active")
        isActive = true
    }
    else{
        sidebar.classList.remove("sidebar-active")
        sidebar.classList.add("sidebar")
        isActive = false
    }
})

addEventListener('resize', function(){
    if(windowSize.matches){
        sidebar.classList.add('sidebar')
        isActive = false
    }
});

export { allTasks , projectList}
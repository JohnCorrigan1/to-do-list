import _ from 'lodash';
import getTask from './functions/getTask'
import doThis from './functions/createTask';
import createProject from './ui/appendProject';
import Project from './functions/newProject';
import appendTask from './ui/appendTask';

let allTasks: doThis[] = []
let projectList: Project[] = [];

// localStorage.setItem("myLocalStorage")

const renderAllTasks = document.querySelector('.all-tasks')!
const addTask = <HTMLButtonElement> document.getElementById('add-task')!;
const newProjectButton =  <HTMLButtonElement> document.querySelector('.add-project')!
const hamburger = document.querySelector('.hamburger')!
const sidebar = <HTMLDivElement> document.querySelector('.sidebar')!
const currentProject = document.querySelector('.project-page-label')!
let windowSize = window.matchMedia("(min-width: 700px)")


addTask.addEventListener('click', function(){
    console.log("testing")
    getTask();
    addTask.disabled = true;
})

renderAllTasks.addEventListener('click', function(){
    currentProject.textContent = "All To Do's"
    appendTask(allTasks)
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
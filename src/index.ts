import getTask from './functions/getTask'
import createProject from './ui/appendProject';
import appendTask from './ui/appendTask';
import createTask from './functions/createTask';
import { getStorageAll, getStorageProjects } from './functions/localStorage';
import renderProjectList from './ui/renderProjectList';

let projectList: string[];
let taskArr: createTask[];

if(localStorage.getItem("tasks") === null){
    taskArr = [];
}

else{
    taskArr = getStorageAll();
}

if(localStorage.getItem("projectList") === null){
    projectList = [];
}

else {
    projectList = getStorageProjects();
}
   
renderProjectList(projectList);
appendTask();

const renderAllTasks = document.querySelector('.all-tasks')!
const addTask = <HTMLButtonElement> document.getElementById('add-task')!;
const newProjectButton =  <HTMLButtonElement> document.querySelector('.add-project')!
const hamburger = document.querySelector('.hamburger')!
const sidebar = <HTMLDivElement> document.querySelector('.sidebar')!
const currentProject = document.querySelector('.project-page-label')!
let windowSize = window.matchMedia("(min-width: 700px)")
let isActive: boolean = false


addTask.addEventListener('click', function(){
    getTask(taskArr);
    addTask.disabled = true;
})

renderAllTasks.addEventListener('click', function(){
    currentProject.textContent = "All To Do's"
    appendTask()
})

newProjectButton.addEventListener('click', function(){
    createProject(projectList);
    newProjectButton.disabled = true;
})

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

export { taskArr, projectList }
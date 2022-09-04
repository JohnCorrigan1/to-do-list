import _, { head } from 'lodash';
import getTask from './functions/getTask'
// import doThis from './functions/createTask';
import createProject from './ui/appendProject';
// import Project from './functions/newProject';
import appendTask from './ui/appendTask';
// import { check, trash } from './ui/images'
// import removeTask from './functions/removeTask';
import createTask from './functions/createTask';
import { getStorageAll, setStorageAll, getStorageProjects } from './functions/localStorage';
import renderProjectList from './ui/renderProjectList';


let projectList: string[];
let taskArr: createTask[];
// taskArr.push(new createTask("Example Task", "6-22-2022", 'project'))

if(localStorage.getItem("tasks") === null){
    taskArr = [];
    // console.log(taskArr)
}
else{
    taskArr = getStorageAll();
    // console.log(taskArr)
}

if(localStorage.getItem("projectList") === null){
    projectList = [];
}

else {
    projectList = getStorageProjects();
}
    // setStorageAll(taskArr);
    
    // taskArr.push(new createTask("ANother example", "7-22-2022", ''))
    
    // setStorageAll(taskArr);

console.log("project list: ", projectList)
renderProjectList(projectList);

appendTask();

// if(JSON.parse(localStorage.getItem("allTasks")))
// allTasks = JSON.parse(localStorage.getItem("allTasks")

// localStorage.setItem("allTasks", JSON.stringify(allTasks))
// localStorage.setItem("projectList", JSON.stringify(projectList))

const trash = <HTMLElement> document.querySelector('.delete-task')
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


// if(trash){
// trash.addEventListener('click', function(){
//     console.log(this.parentElement?.firstChild?.nextSibling?.textContent)
//     const taskClicked = this.parentElement?.firstChild?.nextSibling?.textContent;
//     const taskDiv = this.parentElement
//     if(taskClicked && taskDiv){
//     removeTask(taskClicked, taskDiv);
//     // console.log(allTasks)
//     }
// })
// }

//removes abiility for things
// check.addEventListener('click', function(){
//     const headerDone = this.parentElement?.firstChild?.nextSibling as HTMLElement;
//     if(headerDone){
//         headerDone.style.setProperty('text-decoration', 'line-through');
//     }
// })



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
import { allTasks, projectList } from "..";

function getStorageAll(){
    return JSON.parse(localStorage.getItem("allTasks"))
    // allTasks = 
}
function getStorageProjects(){
    return projectList = JSON.parse(localStorage.getItem("projectList"))
}

function setStorageProjects(projectList){

    localStorage.setItem("projectList", JSON.stringify(projectList))
}

function setStorageAll(allTasks){
    localStorage.setItem("allTasks", JSON.stringify(allTasks))

}

export { setStorageAll, setStorageProjects, getStorageAll, getStorageProjects }
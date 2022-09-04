function getStorageAll(){
    return JSON.parse(localStorage.getItem("tasks"))
    // allTasks = 
}
function getStorageProjects(){
    return JSON.parse(localStorage.getItem("projectList"))
}

function setStorageProjects(projectList){

    localStorage.setItem("projectList", JSON.stringify(projectList))
}

function setStorageAll(taskArr){
    localStorage.setItem("tasks", JSON.stringify(taskArr))
    

}

export { setStorageAll, getStorageAll, getStorageProjects, setStorageProjects }
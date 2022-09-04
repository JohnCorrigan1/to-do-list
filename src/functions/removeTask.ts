import { taskArr, projectList } from "..";
import createTask from "./createTask";
import { setStorageAll, setStorageProjects } from "./localStorage";
// // import { projectList } from "..";


export default function removeTask(taskClicked: string, taskDiv: HTMLElement){

    for(let i = 0; i < taskArr.length; i++){
        if(taskArr[i].name === taskClicked){
            taskArr.splice(i, 1)
            taskDiv.remove()
        }
    }
    setStorageAll(taskArr)
}

function removeProject(projectClicked: string, projectDiv: HTMLElement){

    for(let i = 0; i < projectList.length; i++){
        if(projectList[i] === projectClicked){
            projectList.splice(i, 1)
            projectDiv.remove()
        }
    }
    setStorageProjects(projectList)
}

export { removeProject }



// export default function removeTask(taskClicked: string, taskDiv: HTMLElement){
//     let projectGroup: string = '';
//     for(let i = 0; i < allTasks.length; i++){
//         if(allTasks[i].name === taskClicked){
//             if(allTasks[i].projectGroup !== ''){
//                 projectGroup = allTasks[i].projectGroup;                
//         }
//         allTasks.splice(i, 1)
//         taskDiv.remove();
//         console.log(projectList)
//     }
//     }
//     for(let i = 0; i < projectList.length; i++){
//         if(projectList[i].name === projectGroup){
//             for(let j = 0; j < projectList[i].tasks.length; j++){
//                 if(projectList[i].tasks[j].name === taskClicked){
//                     projectList[i].tasks.splice(j, 1)
//                 }
//             }
//         }
//     }
//     console.log(projectList)
// }
// import { allTasks, projectList } from "..";
// // import { projectList } from "..";

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
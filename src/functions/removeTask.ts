import { remove } from "lodash";
import { allTasks } from "..";

export default function removeTask(taskClicked: string, taskDiv: HTMLElement){
    for(let i = 0; i < allTasks.length; i++){
        if(allTasks[i].name === taskClicked){
            allTasks.splice(i, 1)
            taskDiv.remove();
        }
    }
    //still need to remove from project array
    // for(let i = 0; i < allTasks.length; i++){
    //     if(allTasks[i].name === taskClicked){
    //         allTasks.splice(i, 1)
    //         taskDiv.remove();
    //     }
    // }
}
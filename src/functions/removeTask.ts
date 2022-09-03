import { allTasks } from "..";

export default function removeTask(taskClicked: string, taskDiv: HTMLElement){
    for(let i = 0; i < allTasks.length; i++){
        if(allTasks[i].name === taskClicked){
            if(allTasks[i].projectGroup !== ''){
            //     for(let j = 0; j < )
            // 
            allTasks.splice(i, 1)
            taskDiv.remove();
        }
    }
    }
}
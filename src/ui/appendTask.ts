import _ from "lodash";
import doThis from "../functions/createTask";
// import Delete from './../imgs/delete.png';
import { Trash, Check } from './images'
import removeTask from "../functions/removeTask";


export default function appendTask(allTasks: doThis[]){
    const toDos = document.querySelector('.tasks')!
    toDos.innerHTML = ''
    
        allTasks.forEach(element => {

            const trash = new Image();
            trash.src = Trash;
            trash.classList.add('delete-task')

            if(trash){
                trash.addEventListener('click', function(){
                    console.log(this.parentElement?.firstChild?.nextSibling?.textContent)
                    const taskClicked = this.parentElement?.firstChild?.nextSibling?.textContent;
                    const taskDiv = this.parentElement
                    if(taskClicked && taskDiv){
                    removeTask(taskClicked, taskDiv);
                    console.log(allTasks)
                    }
                })
                }

            const check = new Image();
            check.src = Check;
            check.classList.add('task-done')
            
            const taskDiv = document.createElement('div')
            taskDiv.classList.add('item')

            const done = document.createElement('button')
            done.classList.add('done')
            done.textContent = "X"

            const itemTitle = document.createElement('h3')
            itemTitle.classList.add('item-title')
            itemTitle.textContent = element.name

            const itemDate = document.createElement('p')
            itemDate.classList.add('date')
            itemDate.textContent = "Due Date: " + element.date

            taskDiv.appendChild(check)
            taskDiv.appendChild(itemTitle)
            taskDiv.appendChild(itemDate)
            taskDiv.appendChild(trash)
            toDos.appendChild(taskDiv)
    });
}

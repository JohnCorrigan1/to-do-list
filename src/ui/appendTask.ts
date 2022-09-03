import _ from "lodash";
import doThis from "../functions/createTask";
// import Delete from './../imgs/delete.png';
import { trash, check } from './images'


export default function appendTask(allTasks: doThis[]){
    const toDos = document.querySelector('.tasks')!
    toDos.innerHTML = ''
    
        allTasks.forEach(element => {
            
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

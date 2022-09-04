import { Trash, Check } from './images'
import removeTask from "../functions/removeTask";
import { taskArr } from ".."

export default function appendTask(){

    const toDos = document.querySelector('.tasks')!
    const projectName = document.querySelector('.project-page-label')!
    toDos.innerHTML = ''

    taskArr.forEach(item =>{
        const trash = new Image();
        trash.src = Trash
        trash.classList.add('delete-task')

        const check = new Image();
        check.src = Check;
        check.classList.add('task-done')

        if(trash){
            trash.addEventListener('click', function(){
            console.log(this.parentElement?.firstChild?.nextSibling?.textContent)
            const taskClicked = this.parentElement?.firstChild?.nextSibling?.textContent;
            const taskDiv = this.parentElement
            if(taskClicked && taskDiv){
                removeTask(taskClicked, taskDiv);
                }
            })
        }
        
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('item')
        
        const itemTitle = document.createElement('h3')
        itemTitle.classList.add('item-title')
        itemTitle.textContent = item.name
        
        const itemDate = document.createElement('p')
        itemDate.classList.add('date')
        itemDate.textContent = "Due Date: " + item.date

        if(projectName.textContent === item.projectGroup){
            taskDiv.appendChild(check)
            taskDiv.appendChild(itemTitle)
            taskDiv.appendChild(itemDate)
            taskDiv.appendChild(trash)
            toDos.appendChild(taskDiv)
        }
        
        else if(projectName.textContent === "All To Do's"){
            taskDiv.appendChild(check)
            taskDiv.appendChild(itemTitle)
            taskDiv.appendChild(itemDate)
            taskDiv.appendChild(trash)
            toDos.appendChild(taskDiv)
        }
    })
}
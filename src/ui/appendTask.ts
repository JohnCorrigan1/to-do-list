// import _ from "lodash";
// import doThis from "../functions/createTask";
// // import Delete from './../imgs/delete.png';
import createTask from '../functions/createTask';
import { Trash, Check } from './images'
// import removeTask from "../functions/removeTask";
import { taskArr } from ".."

// // allTasks: doThis[]
export default function appendTask(){
    const toDos = document.querySelector('.tasks')!
    toDos.innerHTML = ''
    console.log(taskArr)
    taskArr.forEach(item =>{
        const trash = new Image();
        trash.src = Trash
        trash.classList.add('delete-task')

        const check = new Image();
        check.src = Check;
        check.classList.add('task-done')

        // if(trash){
        //     trash.addEventListener('click', function(){
        //     console.log(this.parentElement?.firstChild?.nextSibling?.textContent)
        //     // const taskClicked = this.parentElement?.firstChild?.nextSibling?.textContent;
        //     // const taskDiv = this.parentElement
        //     // if(taskClicked && taskDiv){
        //     // // removeTask(taskClicked, taskDiv);
        //     // // console.log(allTasks)
        //     //     }
        //     })
        // }
        
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('item')
        
                 
        
        const itemTitle = document.createElement('h3')
        itemTitle.classList.add('item-title')
        itemTitle.textContent = item.name
        
        const itemDate = document.createElement('p')
        itemDate.classList.add('date')
        itemDate.textContent = "Due Date: " + item.date
        
        taskDiv.appendChild(check)
        taskDiv.appendChild(itemTitle)
        taskDiv.appendChild(itemDate)
        taskDiv.appendChild(trash)
        toDos.appendChild(taskDiv)
        
    })
}
//         for(let x in localStorage.allTasks){

//             const trash = new Image();
//             trash.src = Trash;
//             trash.classList.add('delete-task')

//             if(trash){
//                 trash.addEventListener('click', function(){
//                     console.log(this.parentElement?.firstChild?.nextSibling?.textContent)
//                     const taskClicked = this.parentElement?.firstChild?.nextSibling?.textContent;
//                     const taskDiv = this.parentElement
//                     if(taskClicked && taskDiv){
//                     removeTask(taskClicked, taskDiv);
//                     // console.log(allTasks)
//                     }
//                 })
//                 }

//             const check = new Image();
//             check.src = Check;
//             check.classList.add('task-done')
            
//             const taskDiv = document.createElement('div')
//             taskDiv.classList.add('item')

//             const done = document.createElement('button')
//             done.classList.add('done')
//             done.textContent = "X"

//             const itemTitle = document.createElement('h3')
//             itemTitle.classList.add('item-title')
//             itemTitle.textContent = localStorage.allTasks[x].name

//             const itemDate = document.createElement('p')
//             itemDate.classList.add('date')
//             itemDate.textContent = "Due Date: " + localStorage.allTasks[x].date

//             taskDiv.appendChild(check)
//             taskDiv.appendChild(itemTitle)
//             taskDiv.appendChild(itemDate)
//             taskDiv.appendChild(trash)
//             toDos.appendChild(taskDiv)
//     }
// }

import createTask from './createTask'
import appendTask from '../ui/appendTask'
// import { taskArr } from '..'
import { setStorageAll } from './localStorage'
// import { getStorageAll, setStorageAll, getStorageProjects, setStorageProjects } from './localStorage'

export default function getTask(taskArr: createTask[]){
    const add = document.querySelector('.add')!
    const add2 = document.querySelector('.add2')!
    const newTask = <HTMLButtonElement> document.querySelector('.add-task')!
    
    const nameTask = document.createElement('div')
    nameTask.classList.add('name-task')

    const taskDate = document.createElement('div')
    taskDate.classList.add('task-date')

    const addIt = <HTMLButtonElement> document.createElement('button')
    addIt.type = 'submit'
    addIt.classList.add('add-it')
    addIt.textContent = "Add it"

    const cancelIt = document.createElement('button')
    cancelIt.type = 'submit'
    cancelIt.classList.add('cancel-it')
    cancelIt.textContent = "Cancel"

    const nameLabel = document.createElement('label')
    nameLabel.classList.add('name-label')
    nameLabel.textContent = "Task Name"

    const inputName = <HTMLInputElement> document.createElement('input')
    inputName.classList.add('input-name')

    const date = <HTMLInputElement> document.createElement('input')
    date.type = 'date'
    date.classList.add('due-date')

    const dateLabel = document.createElement('label')
    dateLabel.textContent = "Due Date"

    nameTask.appendChild(nameLabel)
    nameTask.appendChild(inputName)

    taskDate.appendChild(dateLabel)
    taskDate.appendChild(date)

    add.appendChild(nameTask)
    add.appendChild(taskDate)
    add2.appendChild(addIt)
    add2.appendChild(cancelIt)


    const currentProject = <HTMLElement> document.querySelector('.project-page-label')

    addIt.addEventListener('click', function(){
        if(currentProject.textContent !== "All To Do's"){
            if(typeof(currentProject.textContent) === 'string'){
                taskArr.push(new createTask(inputName.value, date.value, currentProject.textContent))
                inputName.value = ''
                date.value = ''
                appendTask();
                // taskArr.forEach(item =>{
                //     if(item.projectGroup === currentProject.textContent){
                //         // appendTask();
                //     }
                // })
            }
        }
        else{
            taskArr.push(new createTask(inputName.value, date.value, ''))
            inputName.value = ''
            date.value = ''
            appendTask();
            // setStorageAll(taskArr)
        }
        setStorageAll(taskArr)
    })
}

//                 for(let i = 0; i < projectList.length; i++){
//                     if(projectList[i].name === currentProject.textContent){
//                         // projectList[i].tasks.push(task)
//                         // allTasks.push(task)
//                         setStorageAll(task)
//                         setStorageProjects(task)
//                         // localStorage.setItem("allTasks", JSON.stringify(allTasks))
//                         // localStorage.setItem("projectList", JSON.stringify(projectList))
//                         appendTask()
//                         console.log("This project is ", projectList[i])
//                     }
//                 }
//             }
        // }
//         else{
//             const task = new doThis(inputName.value, date.value, '')
//             inputName.value = ''
//             date.value = ''
//             // allTasks.push(task)
//             setStorageAll(task)
//             // localStorage.setItem("allTasks", JSON.stringify(allTasks))
//             appendTask();
//         }
//         add.innerHTML = ''
//         add2.innerHTML = ''
//         newTask.disabled = false
//     })

//     cancelIt.addEventListener('click', function(){
//         add.innerHTML = ''
//         add2.innerHTML = ''
//         newTask.disabled = false
//     })
// }
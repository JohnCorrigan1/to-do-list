import createTask from './createTask'
import appendTask from '../ui/appendTask'
import { setStorageAll } from './localStorage'

export default function getTask(taskArr: createTask[]){
    const add = document.querySelector('.add')!
    const add2 = document.querySelector('.add2')!
    const addTask = <HTMLButtonElement> document.querySelector('.add-task')!
    
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
    cancelIt.classList.add('add-it')
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
        if(inputName.value !== ''){
            addIt.disabled = true;
            if(currentProject.textContent !== "All To Do's"){
                if(typeof(currentProject.textContent) === 'string'){
                    taskArr.push(new createTask(inputName.value, date.value, currentProject.textContent))
                    inputName.value = ''
                    date.value = ''
                    appendTask();
                }
            }
            else{
                taskArr.push(new createTask(inputName.value, date.value, ''))
                inputName.value = ''
                date.value = ''
                appendTask();
            }
            addIt.disabled = false;
            setStorageAll(taskArr)
        }
        else{
            inputName.style.borderColor = 'Red'
            nameLabel.textContent += ": required"
        }
        })


    cancelIt.addEventListener('click', function(){
        add.innerHTML = ''
        add2.innerHTML = ''
        addTask.disabled = false;
    })

}
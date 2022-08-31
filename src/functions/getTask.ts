import doThis, { appendTask } from './createTask'
// import { appendTask } from './createTask'

export default function getTask(){
    const add = document.querySelector('.add')!
    const add2 = document.querySelector('.add2')!
    
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

    let allTasks: doThis[] = []
    addIt.addEventListener('click', function(){
        console.log("Testing 2")
        const task = new doThis(inputName.value, date.value)
        console.log(task)
        inputName.value = ''
        date.value = ''
        allTasks.push(task)
        console.log(allTasks)
        appendTask(allTasks);
    })
}
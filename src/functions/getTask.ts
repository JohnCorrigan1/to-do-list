export default function getTask(){
    const add = document.querySelector('.add')!
    const add2 = document.querySelector('.add2')!
    
    const nameTask = document.createElement('div')
    nameTask.classList.add('name-task')

    const taskDate = document.createElement('div')
    taskDate.classList.add('task-date')

    const addIt = document.createElement('button')
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

    const inputName = document.createElement('input')
    inputName.classList.add('input-name')

    const date = document.createElement('input')
    date.type = 'date'


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
}
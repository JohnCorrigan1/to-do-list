export default function createProject(){

   

    
        const projectNameInput = document.createElement('input')!
        projectNameInput.classList.add('project-name-input')

        const projectNameLabel = document.createElement('label')!
        projectNameLabel.classList.add('label')
        projectNameLabel.textContent = "Project Name:"

        const add3 = document.querySelector('.add3')!
        add3.appendChild(projectNameLabel)
        add3.appendChild(projectNameInput)

        const addIt = document.createElement('button')
        addIt.textContent = "Add It"

        const cancelIt = document.createElement('button')
        cancelIt.textContent = "Cancel It"

        const add4 = document.querySelector('.add4')!
        
        add4.appendChild(addIt)
        add4.appendChild(cancelIt)
}



import { setStorageProjects } from "../functions/localStorage"
import renderProjectList from "./renderProjectList"

export default function createProject(projectList: string[]){
        
    const newProjectButton = <HTMLButtonElement> document.querySelector('.add-project')

    const projectNameInput = <HTMLInputElement> document.createElement('input')!
    projectNameInput.classList.add('project-name-input')

    const projectNameLabel = document.createElement('label')!
    projectNameLabel.classList.add('label')
    projectNameLabel.textContent = "Project Name:"

    const add3 = document.querySelector('.add3')!
    add3.appendChild(projectNameLabel)
    add3.appendChild(projectNameInput)

    const addIt = <HTMLButtonElement> document.createElement('button')
    addIt.textContent = "Add It"

    const cancelIt = <HTMLButtonElement> document.createElement('button')
    cancelIt.textContent = "Cancel It"

    const add4 = document.querySelector('.add4')!

    add4.appendChild(addIt)
    add4.appendChild(cancelIt) 
    
    addIt.addEventListener('click', function(){
        addIt.disabled = true

        projectList.push(projectNameInput.value)
        console.log(projectList)
        setStorageProjects(projectList)
        renderProjectList(projectList);

        add3.innerHTML = ''
        add4.innerHTML = ''
        newProjectButton.disabled = false
    })

    cancelIt.addEventListener('click', function(){
            add3.innerHTML = ''
            add4.innerHTML = ''
            newProjectButton.disabled = false
    })
}
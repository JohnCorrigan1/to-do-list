import renderProjectPage from "./renderProject"
import appendTask from "./appendTask"
import { Trash } from "./images"
import { removeProject } from "../functions/removeTask"

export default function renderProjectList(projectList: string[]){

    const projectContainer = document.querySelector('.new-project-container')!
    projectContainer.innerHTML = ''
    
    projectList.forEach(item =>{
        
        const newProjectContainer = document.createElement('div')
        newProjectContainer.classList.add('project-list-container')
        
        const newProject = document.createElement('h3')
        newProject.classList.add('project-list')
        newProject.textContent = item;
        
        const trash = new Image();
        trash.src = Trash
        trash.classList.add('delete-task')
        
        if(trash){
            trash.addEventListener('click', function(){
                const projectClicked = this.previousElementSibling?.textContent
                const projectDiv = this.parentElement
                console.log(projectClicked)

                if(projectClicked && projectDiv)
                removeProject(projectClicked, projectDiv);
            })
        }



        newProjectContainer.appendChild(newProject)
        newProjectContainer.appendChild(trash)
        projectContainer.appendChild(newProjectContainer)

        newProject.addEventListener('click', function(){
            if(newProject.textContent){
            renderProjectPage(newProject.textContent)
            appendTask();
            }
        })
    })

}
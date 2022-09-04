// import { projectList } from ".."
import renderProjectPage from "./renderProject"
import appendTask from "./appendTask"


export default function renderProjectList(projectList: string[]){
    const projectHeader = document.querySelector('.project-header')!
    
    projectList.forEach(item =>{
        const newProject = document.createElement('h3')
        newProject.classList.add('project-list')
        newProject.textContent = item;
        projectHeader.appendChild(newProject)

        newProject.addEventListener('click', function(){
            if(newProject.textContent){
            renderProjectPage(newProject.textContent)
            appendTask();
            }
        })
    })

}
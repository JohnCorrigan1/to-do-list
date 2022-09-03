import Project from "../functions/newProject";

export default function renderProjectPage(project: Project){
    const projectPageDiv = document.querySelector('.project-page')!
    
    const projectPageLabel = document.querySelector(".project-page-label")!
    projectPageLabel.innerHTML = ''
    projectPageLabel.textContent = project.name;

    projectPageDiv.appendChild(projectPageLabel)

}
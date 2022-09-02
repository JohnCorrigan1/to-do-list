import Project from "../functions/newProject";

export default function renderProjectPage(project: Project){
    const projectPageDiv = document.querySelector('.project-page')!
    projectPageDiv.innerHTML = ''

    const projectPageLabel = document.createElement("h2")
    projectPageLabel.textContent = project.name;
    projectPageLabel.classList.add('project-page-label')

    projectPageDiv.appendChild(projectPageLabel)

}
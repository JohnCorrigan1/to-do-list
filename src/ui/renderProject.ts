export default function renderProjectPage(projectName: string) {
  const projectPageDiv = document.querySelector(".project-page")!;

  const projectPageLabel = document.querySelector(".project-page-label")!;
  projectPageLabel.innerHTML = "";
  projectPageLabel.textContent = projectName;

  projectPageDiv.appendChild(projectPageLabel);
}

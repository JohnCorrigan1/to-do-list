import { setStorageProjects } from "../functions/localStorage";
import renderProjectList from "./renderProjectList";

export default function createProject(projectList: string[]) {
  const newProjectButton = <HTMLButtonElement>(
    document.querySelector(".add-project")
  );

  const projectNameInput = <HTMLInputElement>document.createElement("input")!;
  projectNameInput.classList.add("project-name-input");

  const projectNameLabel = document.createElement("label")!;
  projectNameLabel.classList.add("label");
  projectNameLabel.textContent = "Project Name:";

  const add3 = document.querySelector(".add3")!;
  add3.appendChild(projectNameLabel);
  add3.appendChild(projectNameInput);

  const addIt = <HTMLButtonElement>document.createElement("button");
  addIt.classList.add("add-it");
  addIt.textContent = "Add";

  const cancelIt = <HTMLButtonElement>document.createElement("button");
  cancelIt.classList.add("add-it");
  cancelIt.textContent = "Cancel";

  const add4 = document.querySelector(".add4")!;

  add4.appendChild(addIt);
  add4.appendChild(cancelIt);

  addIt.addEventListener("click", function () {
    if (projectNameInput.value !== "") {
      addIt.disabled = true;

      projectList.push(projectNameInput.value);
      console.log(projectList);
      setStorageProjects(projectList);
      renderProjectList(projectList);

      add3.innerHTML = "";
      add4.innerHTML = "";
      newProjectButton.disabled = false;
    } else {
      projectNameInput.style.borderColor = "red";
      projectNameLabel.textContent += " required";
    }
  });

  cancelIt.addEventListener("click", function () {
    add3.innerHTML = "";
    add4.innerHTML = "";
    newProjectButton.disabled = false;
  });
}

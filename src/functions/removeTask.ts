import { taskArr, projectList } from "..";
import { setStorageAll, setStorageProjects } from "./localStorage";

export default function removeTask(taskClicked: string, taskDiv: HTMLElement) {
  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].name === taskClicked) {
      taskArr.splice(i, 1);
      taskDiv.remove();
    }
  }
  setStorageAll(taskArr);
}

function removeProject(projectClicked: string, projectDiv: HTMLElement) {
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i] === projectClicked) {
      projectList.splice(i, 1);
      projectDiv.remove();
    }
  }
  setStorageProjects(projectList);
}

export { removeProject };

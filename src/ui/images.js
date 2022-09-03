import Trash from './../imgs/delete.png'
import Check from './../imgs/check.png'


const trash = new Image();
trash.src = Trash;
trash.classList.add('delete-task')

const check = new Image();
check.src = Check;
check.classList.add('task-done')

export { Trash, Check, trash, check}

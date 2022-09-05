import Trash from './../imgs/delete.png'
import Git from './../imgs/GitHub-Mark-32px.png'

const trash = new Image();
trash.src = Trash;
trash.classList.add('delete-task')

const footerImg = document.querySelector('a')
const git = new Image()
git.src = Git
git.classList.add('github-logo')
footerImg?.appendChild(git)

export { Trash }

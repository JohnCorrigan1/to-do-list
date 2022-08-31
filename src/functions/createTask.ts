export default class doThis{

    name: string;
    date: string;

    constructor(name: string, date: string){
        this.name = name;
        this.date = date;
    }
}


function appendTask(allTasks: doThis[]){
    const toDos = document.querySelector('.tasks')!
    toDos.innerHTML = ''
    allTasks.forEach(element => {
        
        
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('item')
        

        const done = document.createElement('button')
        done.classList.add('done')
        done.textContent = "X"

        const itemTitle = document.createElement('h3')
        itemTitle.classList.add('item-title')
        itemTitle.textContent = element.name

        const itemDate = document.createElement('p')
        itemDate.classList.add('date')
        itemDate.textContent = element.date

        taskDiv.appendChild(done)
        taskDiv.appendChild(itemTitle)
        taskDiv.appendChild(itemDate)
        toDos.appendChild(taskDiv)

    });
}

export { appendTask }




const form = document.querySelector('#form')
const taskField = document.querySelector('#taskField')
const taskList = document.querySelector('#taskList')
const taskDone = document.querySelector('#taskDone')
const clearToDoBtn = document.querySelector('.clearToDo')
const clearTaskBtn = document.querySelector('.clearTaskCompleted')

const taskInput = e=>{
  toDoList(taskField.value)
  e.preventDefault()
}

const toDoList = x=>{
  const liElm = document.createElement('li')
  const textElm = document.createTextNode(x)
  liElm.appendChild(textElm)
  taskList.appendChild(liElm)
  taskField.value = ' '
}

const taskCompleted = elm=>{
  const currentTarget = elm.target
  taskDone.appendChild(currentTarget)
}

const deleteTasks = delElm=>{
  const delTarget = delElm.target
  delTarget.remove()
}

const clearNeedToDo = function(){
  if(taskList.hasChildNodes()){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild)
    }
  }
}

const clearTaskCompleted = function(){
  if(taskDone.hasChildNodes()){
    while(taskDone.firstChild){
      taskDone.removeChild(taskDone.firstChild)
    }
  }
}

form.addEventListener('submit', taskInput)
taskList.addEventListener('click', taskCompleted)
taskDone.addEventListener('click', deleteTasks)
clearToDoBtn.addEventListener('click', clearNeedToDo)
clearTaskBtn.addEventListener('click', clearTaskCompleted)
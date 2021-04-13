// const form = document.querySelector('#form')
// const taskField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')

// form.addEventListener('submit', textInput)

// function textInput(e){
//   toDoList(taskField.value)
//   e.preventDefault()
// }

// function toDoList(x){
//   const myHtml = `<li onclick="taskCompleted(this)">${x}</li>`
//   taskList.insertAdjacentHTML('beforeend', myHtml)
//   taskField.value = ''
// }

// function taskCompleted(elm){
//   const taskLi = taskDone.insertAdjacentElement('beforeend', elm)
//   taskLi.removeAttribute('onclick')
//   taskLi.setAttribute('onclick','deleteTasks(this)')
//   console.log(taskLi)
// }

// function deleteTasks(element){
//   element.remove()
// }

// practice 02
const form = document.querySelector('#form')
const taskField = document.querySelector('#taskField')
const taskList = document.querySelector('#taskList')
const taskDone = document.querySelector('#taskDone')
const clearToDoBtn = document.querySelector('.clearToDo')
const clearTaskCompBtn = document.querySelector('.clearTaskCompleted')

const taskCompleted = elm =>{
  const target = elm.target
  taskDone.appendChild(target)
  storeCompletedTasks(target.innerText)
  removeTasksFromLS(target)
  console.log(target)
  console.log(target.innerText)
}

const deleteTasks = delElm=>{
  const delTarget = delElm.target
  delTarget.remove()
  removeTasksFromCompLS(delTarget)
}

loadEvetlisteners()

function loadEvetlisteners(){
  document.addEventListener('DOMContentLoaded', getCompleted)
  document.addEventListener('DOMContentLoaded', getTasks)
  form.addEventListener('submit', textInput)
  taskList.addEventListener('click', taskCompleted)
  taskDone.addEventListener('click', deleteTasks)
  clearToDoBtn.addEventListener('click', clearNeedToDo)
  clearTaskCompBtn.addEventListener('click', clearTaskComp)
}

function getCompleted(){
  let completedTasks
  if(localStorage.getItem('completedTasks') === null){
    completedTasks = []
  }else{
    completedTasks = JSON.parse(localStorage.getItem('completedTasks'))
  }

  completedTasks.forEach(function(taskElm){
    const liElm = document.createElement('li')
    const textElm = document.createTextNode(taskElm)
    liElm.appendChild(textElm)
    taskDone.appendChild(liElm)
  })
}

function getTasks(){
  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{ 
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){
    const liElm = document.createElement('li')
    const textElm = document.createTextNode(task)
    liElm.appendChild(textElm)
    taskList.appendChild(liElm)
  })
}

function textInput(e){
  toDoList(taskField.value)
  e.preventDefault()
}

function toDoList(x){
  const liElm = document.createElement('li')
  const textElm = document.createTextNode(x)
  liElm.appendChild(textElm)
  taskList.appendChild(liElm)
  taskField.value = ''
  storeTasks(x)
  console.log(taskList.appendChild(liElm))
  console.log(x)
}

function storeTasks(task){
  let tasks
  if(localStorage.getItem('tasks')=== null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  console.log(tasks)
}

function storeCompletedTasks(compTask){
  let completedTasks
  if(localStorage.getItem('completedTasks')=== null){
    completedTasks = []
  }else{
    completedTasks = JSON.parse(localStorage.getItem('completedTasks'))
  }
  completedTasks.push(compTask)
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks))
  console.log(completedTasks)
}

function removeTasksFromLS(toDoItem){
  console.log(toDoItem)
  let tasks
  if(localStorage.getItem('tasks')=== null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  console.log(tasks)
  tasks.forEach(function(task, index){
    if(toDoItem.textContent === task){
      tasks.splice(index, 1)
      console.log(task)
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTasksFromCompLS(compItem){
  console.log(compItem)
  let completedTasks
  if(localStorage.getItem('completedTasks') === null){
    completedTasks = []
  }else{
    completedTasks = JSON.parse(localStorage.getItem('completedTasks'))
  }
  console.log(completedTasks)
  completedTasks.forEach(function(taskComp, index){
    if(compItem.textContent === taskComp){
      completedTasks.splice(index, 1)
      console.log(taskComp)
    }
  })
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks))
}

function clearNeedToDo(){
  if(taskList.hasChildNodes()){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild)
    }
  }
  localStorage.clear()
}

function clearTaskComp(){
  if(taskDone.hasChildNodes()){
    while(taskDone.firstChild){
      taskDone.removeChild(taskDone.firstChild)
    }
  }
  localStorage.clear()
}



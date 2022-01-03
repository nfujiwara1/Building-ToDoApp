// const form = document.querySelector('#form')
// const taskField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearToDoBtn = document.querySelector('.clearToDo')
// const clearTaskBtn = document.querySelector('.clearTaskCompleted')

// const taskInput = e=>{
//   toDoList(taskField.value)
//   e.preventDefault()
// }

// const toDoList = x=>{
//   const liElm = document.createElement('li')
//   const textElm = document.createTextNode(x)
//   liElm.appendChild(textElm)
//   taskList.appendChild(liElm)
//   taskField.value = ' '
// }

// const taskCompleted = elm=>{
//   const currentTarget = elm.target
//   taskDone.appendChild(currentTarget)
// }

// const deleteTasks = delElm=>{
//   const delTarget = delElm.target
//   delTarget.remove()
// }

// const clearNeedToDo = function(){
//   if(taskList.hasChildNodes()){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTaskCompleted = function(){
//   if(taskDone.hasChildNodes()){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// form.addEventListener('submit', taskInput)
// taskList.addEventListener('click', taskCompleted)
// taskDone.addEventListener('click', deleteTasks)
// clearToDoBtn.addEventListener('click', clearNeedToDo)
// clearTaskBtn.addEventListener('click', clearTaskCompleted)

// Practice 02
// const form = document.querySelector('#form')
// const textField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearNeedBtn = document.querySelector('.clearToDo')
// const clearTaskBtn = document.querySelector('.clearTaskCompleted')


// const taskInput = e=>{
//   toDoList(textField.value)
//   e.preventDefault()
// }

// const toDoList = x=>{
//   const liElm = document.createElement('li')
//   const textElm = document.createTextNode(x)
//   liElm.appendChild(textElm)
//   taskList.appendChild(liElm)
//   textField.value = ' '
// }

// const taskCompleted = elm=>{
//   const currentTarget = elm.target
//   taskDone.appendChild(currentTarget)
// }

// const deleteToDo = delElm=>{
//   const delTarget = delElm.target
//   delTarget.remove()
// }

// const clearNeedToDo = function(){
//   if(taskList.hasChildNodes){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTasks = function(){
//   if(taskDone.hasChildNodes){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// form.addEventListener('submit', taskInput)
// taskList.addEventListener('click', taskCompleted)
// taskDone.addEventListener('click', deleteToDo)
// clearNeedBtn.addEventListener('click', clearNeedToDo)
// clearTaskBtn.addEventListener('click', clearTasks)

// Practice 03
// const form = document.querySelector('#form')
// const textField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearToDoBtn = document.querySelector('.clearToDo')
// const clearTaskBtn = document.querySelector('.clearTaskCompleted')

// const taskInput = e=>{
//   toDoList(textField.value)
//   e.preventDefault()
// }

// const toDoList = event=>{
//   const liElm = document.createElement('li')
//   const textElm = document.createTextNode(event)
//   liElm.appendChild(textElm)
//   taskList.appendChild(liElm)
//   textField.value = ' '
// }

// const taskCompleted = elm=>{
//   const currentTarget = elm.target
//   taskDone.appendChild(currentTarget)
// }

// const deleteTaskDone = delElm=>{
//   const delTarget = delElm.target
//   delTarget.remove()
// }

// const clearToDo = function(){
//   if(taskList.hasChildNodes){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTasks = function(){
//   if(taskDone.hasChildNodes){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// const loadEventListeners = function(){
//   form.addEventListener('submit', taskInput)
//   taskList.addEventListener('click', taskCompleted)
//   taskDone.addEventListener('click', deleteTaskDone)
//   clearToDoBtn.addEventListener('click', clearToDo)
//   clearTaskBtn.addEventListener('click', clearTasks)
// }

// loadEventListeners()

// Practice 04
// const form = document.querySelector('#form')
// const textField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearToDoBtn = document.querySelector('.clearToDo')
// const clearTaskCompBtn = document.querySelector('.clearTaskCompleted')

// const taskInput = e=>{
//   toDoList(textField.value)
//   e.preventDefault()
// }

// const toDoList = event=>{
//   const liElm = document.createElement('li')
//   const textElm = document.createTextNode(event)
//   liElm.appendChild(textElm)
//   taskList.appendChild(liElm)
//   textField.value = ''
// }

// const taskCompleted = taskElm=>{
//   const currentTarget = taskElm.target
//   taskDone.appendChild(currentTarget)
// }

// const deleteTaskDone = delElm=>{
//   const delTarget = delElm.target
//   delTarget.remove()
// }

// const clearNeedToDo = function(){
//   if(taskList.hasChildNodes){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTaskCompleted = function(){
//   if(taskDone.hasChildNodes){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// const loadEventListeners = function(){
//   form.addEventListener('submit', taskInput)
//   taskList.addEventListener('click', taskCompleted)
//   taskDone.addEventListener('click', deleteTaskDone)
//   clearToDoBtn.addEventListener('click', clearNeedToDo)
//   clearTaskCompBtn.addEventListener('click', clearTaskCompleted)
// }

// loadEventListeners()

// Practice 05
// const form = document.querySelector('#form')
// const taskField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearNeedToDoBtn = document.querySelector('.clearToDo')
// const clearTaskCompBtn = document.querySelector('.clearTaskCompleted')

// const taskInput = e=>{
//   toDoList(taskField.value)
//   e.preventDefault()
// }

// const toDoList = elm=>{
//   const liElm = document.createElement('li')
//   const textNode = document.createTextNode(elm)
//   liElm.appendChild(textNode)
//   taskList.appendChild(liElm)
//   taskField.value = ' '
// }

// const taskCompleted = taskElm=>{
//   const currentTarget = taskElm.target
//   taskDone.appendChild(currentTarget)
// }

// const deleteTaskDone = delElm=>{
//   const delTarget = delElm.target
//   delTarget.remove()
// }

// const clearToDo = function(){
//   if(taskList.hasChildNodes){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTaskComp = function(){
//   if(taskDone.hasChildNodes){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// const loadEventListeners = function(){
//   form.addEventListener('submit', taskInput)
//   taskList.addEventListener('click', taskCompleted)
//   taskDone.addEventListener('click', deleteTaskDone)
//   clearNeedToDoBtn.addEventListener('click', clearToDo)
//   clearTaskCompBtn.addEventListener('click', clearTaskComp)
// }

// loadEventListeners()

// Practice 06
// const form = document.querySelector('#form')
// const taskField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearToDoBtn = document.querySelector('.clearToDo')
// const clearTaskCompleted = document.querySelector('.clearTaskCompleted')

// const taskInput = e=>{
//   toDoList(taskField.value)
//   e.preventDefault()
// }

// const toDoList = elm=>{
//   const liElm = document.createElement('li')
//   const textElm = document.createTextNode(elm)
//   liElm.appendChild(textElm)
//   taskList.appendChild(liElm)
//   taskField.value = ' '
// }

// const taskCompleted = taskElm=>{
//   const currentTarget = taskElm.target
//   taskDone.appendChild(currentTarget)
// }

// const deleteTask = delElm=>{
//   const delTarget = delElm.target
//   delTarget.remove()
// }

// const clearNeedToDo = function(){
//   if(taskList.hasChildNodes){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTaskComp = function(){
//   if(taskDone.hasChildNodes){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// const loadEventListeners = function(){
//   form.addEventListener('submit', taskInput)
//   taskList.addEventListener('click', taskCompleted)
//   taskDone.addEventListener('click', deleteTask)
//   clearToDoBtn.addEventListener('click', clearNeedToDo)
//   clearTaskCompleted.addEventListener('click', clearTaskComp)
// }

// loadEventListeners()

// Practice 07
// const form = document.querySelector('#form')
// const taskField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearToDoBtn = document.querySelector('.clearToDo')
// const clearTaskCompletedBtn = document.querySelector('.clearTaskCompleted')

// const taskInput = e=>{
//   toDoList(taskField.value)
//   e.preventDefault()
// }

// const toDoList = elm=>{
//   const liElm = document.createElement('li')
//   const textElm = document.createTextNode(elm)
//   liElm.appendChild(textElm)
//   taskList.appendChild(liElm)
//   taskField.value = ' '
// }

// const taskCompleted = taskElm=>{
//   const currentTask = taskElm.target
//   taskDone.appendChild(currentTask)
// }

// const deleteTask = delElm=>{
//   const delTask = delElm.target
//   delTask.remove()
// }

// const clearNeedToDo = function(){
//   if(taskList.hasChildNodes){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTaskCompleted = function(){
//   if(taskDone.hasChildNodes){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// const loadEventListeners = function(){
//   form.addEventListener('submit', taskInput)
//   taskList.addEventListener('click', taskCompleted)
//   taskDone.addEventListener('click', deleteTask)
//   clearToDoBtn.addEventListener('click', clearNeedToDo)
//   clearTaskCompletedBtn.addEventListener('click', clearTaskCompleted)
// }

// loadEventListeners()

// Practice 08
// const form = document.querySelector('#form')
// const taskField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearToDoBtn = document.querySelector('.clearToDo')
// const clearTaskCompletedBtn = document.querySelector('.clearTaskCompleted')


// const taskInput = e=>{
//   toDoList(taskField.value)
//   e.preventDefault()
// }

// const toDoList = elm=>{
//   const liElm = document.createElement('li')
//   const textElm = document.createTextNode(elm)
//   liElm.appendChild(textElm)
//   taskList.appendChild(liElm)
//   taskField.value = ' '
// }

// const taskCompleted = taskElm=>{
//   const currentTask = taskElm.target
//   taskDone.appendChild(currentTask)
// }

// const deleteTasks = delElm=>{
//   const currentDelItem = delElm.target
//   currentDelItem.remove()
// }

// const clearNeedToDo = function(){
//   if(taskList.hasChildNodes){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTaskCompleted = function(){
//   if(taskDone.hasChildNodes){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// const loadEventListeners = function(){
//   form.addEventListener('submit', taskInput)
//   taskList.addEventListener('click', taskCompleted)
//   taskDone.addEventListener('click', deleteTasks)
//   clearToDoBtn.addEventListener('click', clearNeedToDo)
//   clearTaskCompletedBtn.addEventListener('click', clearTaskCompleted)
// }

// loadEventListeners()

// Practice 09
// const form = document.querySelector('#form')
// const taskField = document.querySelector('#taskField')
// const taskList = document.querySelector('#taskList')
// const taskDone = document.querySelector('#taskDone')
// const clearToDoBtn = document.querySelector('.clearToDo')
// const clearTaskCompletedBtn = document.querySelector('.clearTaskCompleted')

// const taskInput = e=>{
//   toDoList(taskField.value)
//   e.preventDefault()
// }

// const toDoList = elm=>{
//   const liElm = document.createElement('li')
//   const textElm = document.createTextNode(elm)
//   liElm.appendChild(textElm)
//   taskList.appendChild(liElm)
//   taskField.value = ' '
// }

// const taskCompleted = taskElm=>{
//   const currentTask = taskElm.target
//   taskDone.appendChild(currentTask)
// }

// const deleteTasks = delElm=>{
//   const deleteTask = delElm.target
//   deleteTask.remove()
// }

// const clearNeedToDo = function(){
//   if(taskList.hasChildNodes){
//     while(taskList.firstChild){
//       taskList.removeChild(taskList.firstChild)
//     }
//   }
// }

// const clearTaskCompleted = function(){
//   if(taskDone.hasChildNodes){
//     while(taskDone.firstChild){
//       taskDone.removeChild(taskDone.firstChild)
//     }
//   }
// }

// const loadEventListeners = function(){
//   form.addEventListener('submit', taskInput)
//   taskList.addEventListener('click', taskCompleted)
//   taskDone.addEventListener('click', deleteTasks)
//   clearToDoBtn.addEventListener('click', clearNeedToDo)
//   clearTaskCompletedBtn.addEventListener('click', clearTaskCompleted)
// }

// loadEventListeners()

// Practice-10 01/02/22
const form = document.querySelector('#form')
const taskField = document.querySelector('#taskField')
const taskList = document.querySelector('#taskList')
const taskDone = document.querySelector('#taskDone')
const clearToDoBtn = document.querySelector('.clearToDo')
const clearTaskCompletedBtn = document.querySelector('.clearTaskCompleted')

const taskInput = e=>{
  e.preventDefault()
  toDoList(taskField.value)
}

const toDoList = elm=>{
  const liElm = document.createElement('li')
  const txtElm = document.createTextNode(elm)
  liElm.appendChild(txtElm)
  taskList.appendChild(liElm)
  taskField.value =' '
}

const taskCompleted = taskElm=>{
  const currentTask = taskElm.target
  taskDone.appendChild(currentTask)
}

const deleteTasks = delElm=>{
  const delTask = delElm.target
  delTask.remove()
}

const clearNeedToDo = ()=>{
  if(taskList.hasChildNodes){
    while(taskList.firstChild){ //remove all children from an element
      taskList.removeChild(taskList.firstChild)
    }
  }
}

const clearTaskCompleted = ()=>{
  if(taskDone.hasChildNodes){
    while(taskDone.firstChild){ //remove all children from an element
      taskDone.removeChild(taskDone.firstChild)
    }
  }
}


const loadingEventListeners = ()=>{
  form.addEventListener('submit', taskInput)
  taskList.addEventListener('click', taskCompleted)
  taskDone.addEventListener('click', deleteTasks)
  clearToDoBtn.addEventListener('click', clearNeedToDo)
  clearTaskCompletedBtn.addEventListener('click', clearTaskCompleted)
}

loadingEventListeners()

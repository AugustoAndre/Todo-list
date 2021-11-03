let iconTheme = document.querySelector('.icon-theme')
var bodyTheme = document.querySelector('.light')
let iconThemeImg = document.querySelector('.icon-moon')
let imgBackground = document.querySelector('.img-background-light')
var text = document.getElementById('input')
const inputEle = document.getElementById('input')
var tasks = []
var iconClose = []
var formTask
var texto
var numberTasks = document.querySelector('#number-tasks')


function idGenerator() {
  var timestamp = new Date()

  var id =
    timestamp.getHours().toString() +
    timestamp.getMinutes().toString() +
    timestamp.getSeconds().toString() +
    timestamp.getMilliseconds().toString()

  return id
}

function createTask() {
  var taskDescription = document.getElementById('input').value

  var task = {
    id: idGenerator(),
    data: {
      description: taskDescription
    }
  }

  tasks.push(task)

  updateScreen()
}

function updateScreen() {
  var list = ''

    tasks.forEach(task => {
      list +=
        '<div class="to-do-list" id-data=' +
        task.id +
        '>' +
        '<span  onclick=deleteTask(this) class="icon-close" id-data=' +
        task.id +
        '></span>' +
        '<span class="circle" id-data=' +
        task.id +
        '></span>' +
        '<p class="description" id-data=' +
        task.id +
        '>' +
        task.data.description +
        '</p>' +
        '</div>'
    }) 

  document.getElementById('to-do-list').innerHTML = list
  document.getElementById('input').value = ''

  numberTasks.textContent = parseInt(numberTasks.textContent)
  numberTasks.textContent = tasks.length
}

function deleteTask(element) {
  tasks = tasks.filter(tasks => tasks.id != element.getAttribute('id-data'))
  updateScreen()
}

function clearCompleted() {
  tasks.length = 0
  updateScreen()
}

inputEle.addEventListener('keydown', function (event) {
  texto = document.getElementById('input').value
  if (event.keyCode !== 13) return
  {
    createTask()
    
  }
  
})

iconTheme.addEventListener('click', function () {
  if (bodyTheme == document.querySelector('.light')) {
    bodyTheme.classList.remove('light')
    bodyTheme.classList.add('dark')

    iconThemeImg.classList.remove('icon-moon')
    iconThemeImg.classList.add('icon-sun')

    imgBackground.classList.remove('img-background-light')
    imgBackground.classList.add('img-background-dark')
  } else if (bodyTheme == document.querySelector('.dark')) {
    bodyTheme.classList.remove('dark')
    bodyTheme.classList.add('light')

    iconThemeImg.classList.add('icon-moon')
    iconThemeImg.classList.remove('icon-sun')

    imgBackground.classList.add('img-background-light')
    imgBackground.classList.remove('img-background-dark')
  }
})

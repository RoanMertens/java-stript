// todolist object. does every change in the todos list.
const todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    view.displayTodos()
  },
  changeTodo: function(location, todoText) {
    this.todos[location].todoText = todoText
    view.displayTodos()
  },
  toggleCompleted: function(location) {
    const todo = this.todos[location]
    todo.completed = !todo.completed
    view.displayTodos()
  },
  deleteTodo: function(location) {
    this.todos.splice(location, 1)
    view.displayTodos()
  },
  toggleAll: function() {
    let counter = 0
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        counter += 1
      }
    })
    if (this.todos.length === counter) {
      this.todos.forEach(function(todo) {
        todo.completed = false
      })
    } else {
      this.todos.forEach(function(todo) {
        todo.completed = true
      })
    }
    view.displayTodos()
  },
}

// handles all the events and gives them to the right methods in the todos object
const handlers = {
  addTodo: function() {
    const addTodoTextInput = document.getElementById('addTodoTextInput')
    todoList.addTodo(addTodoTextInput.value)
    addTodoTextInput.value = ''
  },
  changeTodo: function() {
    const changeTodoTextInput = document.getElementById('changeTodoTextInput')
    const changeTodoLocation = document.getElementById('changeTodoLocation')
    todoList.changeTodo(changeTodoLocation.valueAsNumber - 1, changeTodoTextInput.value)
    changeTodoTextInput.value = ''
    changeTodoLocation.value = ''
  },
  toggleCompleted: function(index) {
    todoList.toggleCompleted(index)
  },
  deleteTodo: function(index) {
    todoList.deleteTodo(index)
  },
  toggleAll: function(){
    todoList.toggleAll()
  }
}

// handles all the output that is visible for the user.
const view = {
  displayTodos: function() {
    const todosId = document.getElementById('todoList')
    todosId.innerHTML = ''
    if (todoList.todos.length === 0) {
      const emptyMessage = document.createElement('li')
      emptyMessage.textContent = 'Your to do list is empty!'
      todosId.appendChild(emptyMessage)
    } else {
      todoList.todos.forEach(function(todo, i) {
        let todoLi = document.createElement('li')
        if (todo.completed == true) {
          todoLi.textContent = '(x) ' + todo.todoText
        } else {
          todoLi.textContent = '( ) ' + todo.todoText
        }
        todoLi.id = i
        todoLi.appendChild(this.createDeleteButton())
        todoLi.appendChild(this.createCompleteButton())
        todosId.appendChild(todoLi)
      }, this)
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'deleteButton'
    return deleteButton
  },
  createCompleteButton: function() {
    var completeButton = document.createElement('button')
    completeButton.textContent = 'Toggle completed'
    completeButton.className = 'completeButton'
    return completeButton
  },
  setupEventListeners: function() {
    todoUl = document.getElementById('todoList')
    todoUl.addEventListener('click', function(event) {
      const elementClicked = event.target
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
      } else if (elementClicked.className === 'completeButton') {
        handlers.toggleCompleted(parseInt(elementClicked.parentNode.id))
      }
    })
  }
}

view.setupEventListeners()



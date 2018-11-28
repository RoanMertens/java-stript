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
    for (i = 0; i < this.todos.length; i++) {
      const todo = this.todos[i]
      if (todo.completed === true) {
        counter += 1
      }
    }
    if (this.todos.length === counter) {
      for (i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = false
      }
    } else {
      for (i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = true
      }
    }
    view.displayTodos()
  }
}

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
  toggleCompleted: function() {
    const toggleCompletedLocation = document.getElementById('toggleCompletedLocation')
    todoList.toggleCompleted(toggleCompletedLocation.valueAsNumber - 1)
    toggleCompletedLocation.value = ''
  },
  deleteTodo: function() {
    const deleteTodoLocation = document.getElementById('deleteTodoLocation')
    todoList.deleteTodo(deleteTodoLocation.valueAsNumber - 1)
    deleteTodoLocation.value = ''
  },
  toggleAll: function(){
    todoList.toggleAll()
  }
}

const view = {
  displayTodos: function(){
    const todosId = document.getElementById('todoList')
    todosId.innerHTML = ''
    if (todoList.todos.length === 0) {
      const emptyMessage = document.createElement('li')
      emptyMessage.textContent = 'Your to do list is empty!'
      todosId.appendChild(emptyMessage)
    } else {
      for (let i = 0; i < todoList.todos.length; i++) {
        const todoLi = document.createElement('li')
        const todo = todoList.todos[i]
        if (todo.completed == true) {
          todoLi.textContent = i + 1 + '. (x) ' + todo.todoText
        } else {
          todoLi.textContent = i + 1 + '. ( ) ' + todo.todoText
        }
        todosId.appendChild(todoLi)
      }
    }
  }
}

import {Todo} from './todo';

export class App {
  constructor() {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = '';
    this.todoTags = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription, this.todoTags));
      this.todoDescription = '';
    }
  }

  addTag(todo, tag) {
      let index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos[index].tags.push(tag);
      }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}

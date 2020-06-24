import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todos';
import { TodoService } from '../../Service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo : Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter(); 

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo : true,
      'is-completed' : this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed;
    this.todoService.todoCompleted(todo)
        .subscribe(todo => {
          console.log(todo)
        })
    console.log("toggle");
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
    console.log("delete");
  }

}

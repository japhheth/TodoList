import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Models/Todos';
import {TodoService} from '../../Service/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo: Todo[];

  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
        .subscribe(data => {
          this.todo = data;
    });

  }

  onDeleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo)
        .subscribe(data => {
           this.todo = this.todo.filter(t => t.id !== todo.id);
         // console.log(data, "left over")
        });
  }

  addTodo(todo: Todo){
      this.todoService.addTodo(todo)
          .subscribe(res => {
            this.todo.push(todo);
          });
  }

}

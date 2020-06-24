import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../Models/Todos';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl : string;
  todoLimit : string;
  

  constructor(private http : HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/todos';
    this.todoLimit = '?_limit=5';

   }


   //ADD TODO
   addTodo(todo : Todo) : Observable<Todo> {   
    return this.http.post<Todo>(`${this.baseUrl}`, todo, httpOptions);
   } 

   //Get TODO
  getTodos() : Observable<Todo[]>{
   return this.http.get<Todo[]>(`${this.baseUrl}${this.todoLimit}`)

  }

  //UPDATE TODO

  todoCompleted(todo : Todo) : Observable<any>{
    return this.http.put<Todo>(`${this.baseUrl}/${todo.id}`, todo, httpOptions)

  }

  //DELETE TODO

  deleteTodo(todo: Todo) : Observable<Todo>{
    return this.http.delete<Todo>(`${this.baseUrl}/${todo.id}`, httpOptions)
  }


}

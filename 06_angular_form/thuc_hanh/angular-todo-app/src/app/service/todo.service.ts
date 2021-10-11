import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../model/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[]|any;

  constructor(private httpClient: HttpClient) {}
  findAll(): Observable<Todo[]|any> {
    return this.httpClient.get(' http://localhost:3000/todos');
  }
  saveTodo(todo: Todo){
    this.todos.push(todo);
  }
  findById(id: number){
    return this.todos[id];
  }
}

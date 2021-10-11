import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[]|any;
  content = new FormControl();

  constructor(
    private todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.findAll().subscribe(next =>{
      this.todos = next;
    });

  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo);
      this.content.reset();
    }
  }

  toggleTodo(i: number) {
  this.todoService.findById(i).complete = !this.todoService.findById(i).complete;
  }
}

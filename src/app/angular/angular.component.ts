import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {ResultVO} from '../domain/result.vo';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translate(0,0)'})),
      transition('void => in', [
        style({opacity: 0, transform: 'translate(-100%,0)'}),
        animate(300)
      ]),
      transition('in => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translate(0,0)', offset: 0}),
          style({opacity: 1, transform: 'translate(-50%,0)', offset: 0.7}),
          style({opacity: 0, transform: 'translate(100%,0)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class AngularComponent implements OnInit {
  todoList: TodoVO[] = [];
  newTodo = new TodoVO();
  mapTodo = new Map<number, TodoVO>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTodoList()
      .subscribe(body => {
        this.todoList = body;
        this.mapTodo.clear();
        console.log(this.todoList);
      });
  }

  addTodo(params: TodoVO) {
    this.userService.addTodo(this.newTodo)
      .subscribe(body => {
        // todoList 맨앞에 삽입
        console.log(body);
        this.todoList.unshift(body);
      });
  }

  restore(todo: TodoVO) {
    todo.isEdited = true;

    const tempTodo = Object.assign({}, todo);
    this.mapTodo.set(todo.todo_id, tempTodo);
  }

  cancel(todo: TodoVO) {
    const tempTodo = this.mapTodo.get(todo.todo_id);
    Object.assign(todo, tempTodo);
    todo.isEdited = false;
  }

  modify(todo: TodoVO) {
    this.userService.modifyTodo(todo)
      .subscribe(body => {
        Object.assign(todo, body);
        todo.isEdited = false;
        this.mapTodo.delete(todo.todo_id);
        console.log(body);
      });
  }


  remove(todo) {
    if(confirm('삭제하시겠습니까?')) {
      this.userService.removeTodo(todo.todo_id)
        .subscribe(body => {
          if (body.result === 0) {
            this.todoList.splice(this.todoList.indexOf(todo), 1);
            this.mapTodo.delete(todo.todo_id);
            console.log(body);
          }
        });
    }
  }
}

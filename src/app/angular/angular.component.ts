import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  todoList: TodoVO[] = [];
  newTodo = new TodoVO();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTodoList()
      .subscribe(body => {
        this.todoList = body;
        console.log(this.todoList);
      });
  }

  addTodo(param: TodoVO) {
    this.userService.addTodo(this.newTodo)
      .subscribe(body => {
        // todoList 맨앞에 삽입
        console.log(body);
        this.todoList.unshift(body[0]);
      });
  }
}

import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
@Input()TodoList:any
@Output() sendToParent = new EventEmitter<string>()

deleteTask(task:string){
  this.sendToParent.emit(task)
}
}

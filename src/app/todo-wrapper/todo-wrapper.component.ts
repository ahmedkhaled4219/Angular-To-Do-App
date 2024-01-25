import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoFormComponent,TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
list:string[]=[]

receiveTodoFrorm(task:string){

  console.log(task)
this.list.push(task);
console.log(this.list)
}


receiveTodoList(task : string) {
  this.list = this.list.filter((mytask : any) => mytask !== task)
}

}

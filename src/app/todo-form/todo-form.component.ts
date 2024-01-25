import { Component } from '@angular/core';
import { Output,EventEmitter,ViewChild,ElementRef} from '@angular/core';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @ViewChild('taskInput') taskInput!: ElementRef;
  @Output() sendToParent = new EventEmitter<string>()
 
  addTask(){
    const task: string = this.taskInput.nativeElement.value;
    console.log(task)
    this.sendToParent.emit(task)
    this.taskInput.nativeElement.value = '';
  }
}

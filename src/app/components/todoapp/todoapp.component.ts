import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todoapp',
  imports: [FormsModule, CommonModule],
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.scss'
})
export class TodoappComponent {
  task ='';
  taskList:{id:number,name:string}[] = [];


  addTask(){
    this.taskList.push({id:this.taskList.length+1, name:this.task});
    this.task = "";
  }

  deleteTask(id:number){
    this.taskList = this.taskList.filter((item)=> item.id != id);
  }

  editTask(item:any){

  }
}

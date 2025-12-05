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
  
  // Pour l'édition
  editMode = false;
  currentId: number | null  = null;


  addTask(){

    if(this.editMode && this.currentId !== null){
      this.updateTask();
      return;
    }

    this.taskList.push({
    id:this.taskList.length+1, 
    name:this.task});
    this.task = "";
  }


  editTask(item: {id: number, name: string}){
    this.editMode = true;
    this.currentId = item.id;
    this.task = item.name;
  }

  updateTask() {
    this.taskList = this.taskList.map(item => {
      if(item.id === this.currentId){
        return { ...item, name:this.task}
      }
      return item;
    });
    this.editMode = false;
    this.currentId = null;
    this.task = "";
  }

  deleteTask(id:number){
  this.taskList = this.taskList.filter((item)=> item.id != id);
  }
}

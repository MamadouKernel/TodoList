import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: Task = new Task();
  tasksArray: Task[] = [];
  addTask: Task = new Task();
  
  constructor(private http: TaskServiceService) { }

  ngOnInit() {
    this.getTasks();
  }
  
  getTasks() {
    this.http.getTasks().subscribe(
      res => {
        this.tasksArray = res;
      },
      err => {
        alert("Pas de tâches pour le moment");
      }
    );
  }

  addTasks() {
    this.http.addTask(this.addTask).subscribe(
      res => {
        this.ngOnInit();
        this.addTask = new Task();
      },
      err => {
        alert(err);
      }
    );
  }

  updateTasks(task: Task) {
    this.http.updateTask(task).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        alert("Erreur de modification");
      }
    );
  }

  deleteTasks(id: number) {
    this.http.deleteTask(id).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        alert("Erreur de suppression");
      }
    );
  }
}

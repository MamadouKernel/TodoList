import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private urlServeurApi = environment.urlServiceApi;
  
  constructor(private http:HttpClient) { }

  public getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.urlServeurApi + '/tasks/');
  }

  public getTask(id: number){
    return this.http.get(this.urlServeurApi + '/tasks/' + id);
  }

  public addTask(task:any){
    return this.http.post(this.urlServeurApi + '/tasks/', task).pipe(
      catchError(error => {
        if (error.status === 409) {
          return throwError('La tâche existe déjà.');
        } else {
          return throwError('Une erreur est survenue.');
        }
      })
    );
  }

  
  public updateTask(task:Task){
    return this.http.put(this.urlServeurApi + '/tasks/' + task.id, task);
  }

  public deleteTask(id: number){
    return this.http.delete(this.urlServeurApi + '/tasks/' + id);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks = [];
  OneTask;
  newTasks: any;
  constructor(private _httpService: HttpService){ }
    

    ngOnInit(){
      this.newTasks = {title: "", description: "", newUpdate: false};
      this.getTasksFromService();
    
    }
    
    onUpdate(id){
      const updateData = this.tasks.find(task => task._id === id)
      let observable = this._httpService.editTask(id, updateData);
      observable.subscribe(data =>{
      console.log("I've been updated", data);
      
      })
    }

    onDelete(id){
      
      let observable = this._httpService.deleteTask(id);
      observable.subscribe(data =>{

      })
      console.log( "task successfully deleted")
    }
    onSubmit(){
      let observable = this._httpService.addTask(this.newTasks);
      observable.subscribe(data =>{
      console.log("Got data back from post", data);
      this.newTasks = {title: "", description: ""}
      })
      
    }
    getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {console.log("Got our tasks!", data)
      this.tasks = data['tasks'];
    })
  }
    getOneTasksFromService(id){
      let oneTask = this._httpService.getOneTasks(id);
      console.log(id);
      oneTask.subscribe(data => {console.log("Got our one task!", data)
      this.OneTask = data['tasks'];
    })
  }
}
  


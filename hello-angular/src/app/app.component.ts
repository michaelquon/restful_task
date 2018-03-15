import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Restful Tasks API';
  tasks = [];
  OneTask
  constructor(private _httpService: HttpService){ }

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
  


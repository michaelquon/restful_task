import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  OneTask = [];
  constructor(private _httpService: HttpService){ }
  
    ngOnInit(){
      this.getTasksFromService();
      this.getOneTasksFromService();
    }
    
    getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {console.log("Got our tasks!", data)
      this.tasks = data['tasks'];
    })
  }
    getOneTasksFromService(){
      let oneTask = this._httpService.getOneTasks();
      oneTask.subscribe(data => {console.log("Got our one task!", data)
      this.OneTask = data['tasks'][0];
    })
  }
}
  


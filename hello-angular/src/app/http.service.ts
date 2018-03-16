import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){}
    getTasks(){
      return this._http.get('/tasks');
      }
      getOneTasks(id){
        return this._http.get('/tasks/'+id)
      }
      addTask(newtask){
        return this._http.post('/tasks', newtask)
      }
      deleteTask(id){
        console.log("I've been deleted")
        return this._http.delete('/tasks/'+id)
      }
      editTask(id, updateData){
        console.log("I've reached Update")
        return this._http.put('/tasks/'+id, updateData)
      }
    }


  

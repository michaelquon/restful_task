import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){}
    getTasks(){
      console.log("in service getting all")
      return this._http.get('/tasks');
      }
      getOneTasks(id){
        console.log("in service getting one")
        return this._http.get('/tasks/'+id)

      }
    }


  

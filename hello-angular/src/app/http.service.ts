import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){}
    getTasks(){
      return this._http.get('tasks');
      }
      getOneTasks(){
        return this._http.get('tasks/5aa970317b35134bc0283c83')

      }
    }


  

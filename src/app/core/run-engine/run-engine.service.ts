import { Injectable } from '@angular/core';
import { Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunEngineService {
  private blocks$: {[instanceName: string]: Subject<any>} = {};

  constructor() { }

  public setIntance (instance: {[instanceName: string]: Subject<any>}) {
    this.blocks$ = Object.assign(this.blocks$, instance);
  } 
  public getSubs (instanceName: string): Subject<any>{
    return this.blocks$[instanceName];
  }

  public getAllInstances() {
     return this.blocks$;
  }

}

import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api-service/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RunEngineService } from '../../core/run-engine/run-engine.service';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(public api: ApiService, public egine: RunEngineService) { 
  }

  public searchPerson(personName: string): Observable<any> {
    const url = 'https://swapi.co/api/people/?search=';
    return this.api.get(url + personName).pipe(
      map(data => {
        if (data && data.results) {
          this.egine.getSubs('notifications').next( {display: true});
        }
        return data.results;
      })
     );
  }
}

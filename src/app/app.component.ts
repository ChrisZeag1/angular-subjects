import { Component } from '@angular/core';
import { RunEngineService } from './core/run-engine/run-engine.service';
import { StarwarsService } from './shared';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  export class AppComponent {
    public searchResults$ = new Subject<any>();
    public displayResults: boolean;
    constructor(
      public engineService: RunEngineService, 
      public swService: StarwarsService
     ) {}

    public ngAfterViewInit() {
      this.engineService.getSubs('form1').subscribe(data => {
        const name = (data.name || '') + ' ' + (data.last || '');
        this.swService.searchPerson(name).subscribe((info)=>{
          data.loading = false;
          this.displayResults = !!info.length;
          this.searchResults$.next(info);
        });
      });
    }
}

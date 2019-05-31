import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  private display: boolean;
  @Input()
  public sub$: Subject<any>;
    @Input()
  public instaceName: string;
    @Output()
  public instanceObser = new EventEmitter<{ [intancesName: string]: Subject<any> }>();

  constructor() { 
  }

  ngOnInit() {
    this.instanceObser.emit({[this.instaceName]: new Subject<any>()});
  }

  ngAfterViewInit(): void {
  }

  public ngOnChanges(change: SimpleChange) {
   this.sub$ && this.sub$.subscribe(data => {
     data.display && this.show();
   });
  }

  public show() {
    this.display = true;
    setTimeout(() => { 
      this.display = false;
    }, 4000);
  }

  public hide() {
     this.display = false;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.scss']
})
export class DataViewerComponent implements OnInit {

  constructor() { }
  @Input()
  public data$: Subject<any>;

  ngOnInit(){}

  ngAfterViewInit() {
  }

}

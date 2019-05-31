import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public data: any = {};
  @Input()
  public sub$= new Subject<any>();
  @Input()
  public instaceName: string;
  @Output()
  public instanceObser = new EventEmitter<{ [intancesName: string]: Subject<any> }>();
  constructor() {
  }

  ngOnInit() {
    this.instanceObser.emit({[this.instaceName]: this.sub$});
  }

  ngAfterViewInit() {
  }

  public onSubmit() {
    this.data.loading = true;
    this.sub$.next(this.data);
  }
}

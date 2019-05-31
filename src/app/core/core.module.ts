import { NgModule } from '@angular/core';
import { RunEngineService } from './run-engine/run-engine.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ApiService } from './api-service/api.service';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    FormsModule
  ],
  exports: [
      HttpClientModule,
    FormsModule
  ],
  providers: [
  RunEngineService,
  ApiService,
  ],
})
export class CoreModule { }

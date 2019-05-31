import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { UserFormComponent } from './shared';
import { DataViewerComponent } from './shared';
import { NotificationComponent } from './shared';

import { StarwarsService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DataViewerComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [
  StarwarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

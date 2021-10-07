import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

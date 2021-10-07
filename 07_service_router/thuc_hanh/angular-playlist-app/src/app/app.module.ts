import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutuberPlaylistComponent } from './youtuber-playlist/youtuber-playlist.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutuberPlaylistComponent,
    YoutubePlayerComponent
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

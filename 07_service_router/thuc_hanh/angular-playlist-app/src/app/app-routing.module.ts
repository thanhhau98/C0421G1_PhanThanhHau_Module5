import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {YoutuberPlaylistComponent} from './youtuber-playlist/youtuber-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutuberPlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

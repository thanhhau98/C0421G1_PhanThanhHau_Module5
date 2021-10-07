import { Component, OnInit } from '@angular/core';
import {Song} from '../model/song';
import {SongService} from '../service/song.service';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-youtuber-playlist',
  templateUrl: './youtuber-playlist.component.html',
  styleUrls: ['./youtuber-playlist.component.css']
})
export class YoutuberPlaylistComponent implements OnInit {

  playlist: Song[] = [];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }


}

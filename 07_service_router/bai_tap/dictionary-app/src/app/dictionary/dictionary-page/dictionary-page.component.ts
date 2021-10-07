import { Component, OnInit } from '@angular/core';
import {Iword} from '../../iword';
import {DictionaryServiceService} from '../../service/dictionary-service.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  words: Iword[] = [];
  constructor(private dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.words = this.dictionaryService.getAll();
  }

}

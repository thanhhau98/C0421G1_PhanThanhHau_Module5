import { Component, OnInit } from '@angular/core';
import {Iword} from '../../iword';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryServiceService} from '../../service/dictionary-service.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: Iword;
  constructor(private activedRouter: ActivatedRoute ,
              private dictionaryService: DictionaryServiceService) {}

  ngOnInit(): void {
      this.activedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      console.log(word);
      this.wordDetail = this.dictionaryService.findByWord(word);
    });
  }

}

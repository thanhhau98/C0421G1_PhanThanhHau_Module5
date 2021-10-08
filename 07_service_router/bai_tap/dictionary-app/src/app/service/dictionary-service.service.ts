import { Injectable } from '@angular/core';
import {Iword} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words: Iword[] = [
    { word: 'Hello' , mean: 'Xin chào' },
    { word: 'Car' , mean: 'Xe hơi' },
    { word: 'Chair' , mean: 'Ghế' },
    { word: 'Table' , mean: 'Bàn' },
    { word: 'Lamp' , mean: 'Cái đèn' },
  ];

  constructor() { }
  getAll(){
    return this.words;
  }

  findByWord(word: string): Iword {
    return this.words.find(item => item.word === word);
    }
}

import { Trivia } from './../interfaces/trivia.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  public triviaList: Array<Trivia>;
  constructor() {
    this.triviaList = [];
  }
  addTrivia(trivia: Trivia) {
    this.triviaList.push(trivia);
  }
}

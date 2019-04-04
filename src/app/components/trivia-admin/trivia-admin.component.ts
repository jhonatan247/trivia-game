import { Trivia } from './../../interfaces/trivia.interface';
import { Component, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia-admin',
  templateUrl: './trivia-admin.component.html',
  styleUrls: ['./trivia-admin.component.sass']
})
export class TriviaAdminComponent implements OnInit {
  trivias: Array<Trivia>;
  constructor(private triviaService: TriviaService) {
    this.trivias = triviaService.triviaList;
  }

  ngOnInit() {}
}

import { TriviaService } from './../../services/trivia.service';
import { Option } from './../../interfaces/option.interface';
import { Component, OnInit } from '@angular/core';
import { Trivia } from 'src/app/interfaces/trivia.interface';
import { Question } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-generate-trivia',
  templateUrl: './generate-trivia.component.html',
  styleUrls: ['./generate-trivia.component.sass']
})
export class GenerateTriviaComponent implements OnInit {
  trivia: Trivia;
  constructor(private triviaService: TriviaService) {
    this.trivia = this.getEmptyTrivia();
  }

  ngOnInit() {}

  getEmptyTrivia(): Trivia {
    return {
      title: '',
      description: '',
      questions: new Array<Question>()
    };
  }

  getEmptyQuestion(): Question {
    return {
      question: '',
      level: 'Easy',
      category: 'categoría 1',
      options: new Array<Option>()
    };
  }

  getEmptyOption(): Option {
    return {
      option: '',
      isCorrect: false
    };
  }

  addQuestion() {
    this.trivia.questions.push(this.getEmptyQuestion());
  }
  addTrivia() {
    this.triviaService.addTrivia(this.trivia);
    this.trivia = this.getEmptyTrivia();
  }
  addOptionToQuestion(question: Question) {
    question.options.push(this.getEmptyOption());
  }
}

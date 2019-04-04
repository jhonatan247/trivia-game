import { Question } from './question.interface';

export interface Trivia {
  title: string;
  description: string;
  questions: Array<Question>;
}

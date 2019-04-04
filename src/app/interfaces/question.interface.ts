import { Option } from './option.interface';

export interface Question {
  question: string;
  level: string;
  category: string;
  options: Array<Option>;
}

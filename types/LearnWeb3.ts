export interface Question {
  questionText: string;
  options: Option[];
}

export interface Option {
  optionText: string;
  isCorrect: boolean;
}

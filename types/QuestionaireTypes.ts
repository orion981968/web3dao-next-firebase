// Assuming you have a type for your questions, if not, define one.
export interface QuestionaireTypes {
  questionText: string;
  options: Array<{
    optionText: string;
    isCorrect: boolean;
  }>;
}

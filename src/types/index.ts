export interface ModuleMeta {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  sections: number;
  quizQuestions: number;
  locked: boolean;
}

export interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  keyTakeaway?: string;
  visualKey?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

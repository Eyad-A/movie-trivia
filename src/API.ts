export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] }


export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export async function getQuizQuestions(amount: number, difficulty: Difficulty) {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=11&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
}
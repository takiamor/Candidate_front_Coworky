import { Injectable } from '@angular/core';



interface Quiz{
  question: string;
  answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[] = [
    {
      question: 'What\'s the capital of Somalia',
      answer: [
        { option: 'Nairobi', correct: false },
        { option: 'Asmara', correct: false },
        { option: 'Mogadishu', correct: true },
        { option: 'Addis Ababa', correct: false },
      ]
    },
    {
      question: 'What\'s the capital of Mexico',
      answer: [
        { option: 'Guadalajara City', correct: false },
        { option: 'Puebla City', correct: false },
        { option: 'Mexico City', correct: true },
        { option: 'Cancún', correct: false },
      ]
    },
    {
      question: 'What\'s the capital of tunisia',
      answer: [
        { option: 'Guadalajara City', correct: false },
        { option: 'tunisia', correct: true },
        { option: 'Mexico City', correct: false },
        { option: 'Cancún', correct: false },
      ]
    },
    {
      question: 'What\'s the capital of Algeria',
      answer: [
        { option: 'Guadalajara City', correct: false },
        { option: 'tunisia', correct: false },
        { option: 'Algeria', correct: true },
        { option: 'Cancún', correct: false },
      ]
    },
  ]
  getQuizzes(){
    return this.quizzes;
  }
}

import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import {QuizService} from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];
  
  result = false;
  resultStatus = 'Show Result';

  constructor(private quizService: QuizService ) { }

  ngOnInit(): void {
 this.quizzes = this.quizService.getQuizzes();
  }
  onAnswer(option :boolean){
    this.answerSelected = true;
    setTimeout (() => {
      this.currentQuiz++;
    this.answerSelected = false;
    },3000);
    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
  }
  showResult(){
    this.result = true;
  }
}

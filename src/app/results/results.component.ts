import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  submittedAnswers: any;
  questions: any;
  correct: number;
  disabled: boolean = true;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.returnQuizQuestions();
    this.submittedAnswers = this.quizService.returnCurrentAnswers();
    this.correct = this.quizService.returnNumberOfCorrect();
    if (!this.questions) {
      this.quizService.navigateToQuiz();
    }
  }
}

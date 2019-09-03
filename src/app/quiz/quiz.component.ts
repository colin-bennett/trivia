import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  // questions: any[] = [];
  questions: any;
  // score: number = 0;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getAllQuestions().subscribe(response => {
      this.questions = response;
      console.log(this.questions);
    });
  }

  submitQuiz(form: NgForm): void {
    this.quizService.calculateScore(form.value, this.questions);
    form.reset();
    this.quizService.navigateToResults();
  }

  // addScore(form: NgForm) {
  //   for (let i = 0; i < this.questions.length; i++) {
  //     if (form.value[i] === this.questions[i].answer) {
  //       this.score++;
  //     } else {
  //       this.score = this.score;
  //     }
  //   }
  //   this.quizService
  //     .postScore(form.value.username, this.score)
  //     .subscribe(response => {
  //       this.score = response;
  //     });
  //   console.log(form.value, this.questions, this.score);
  // }
}

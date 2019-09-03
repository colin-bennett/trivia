import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  correct: number = 0;
  submittedAnswers: any;
  quizQuestions: any;
  constructor(private http: HttpClient, private router: Router) {}

  getAllQuestions(): Observable<any> {
    return this.http.get("http://localhost:3000/questions", {
      responseType: "json"
    });
  }

  addScore(username: string, score: number): Observable<any> {
    return this.http.post("http://localhost:3000/scores", { username, score });
  }

  calculateScore(form: any, questions: any) {
    console.log(form, questions);
    this.submittedAnswers = form;
    this.quizQuestions = questions;
    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.correct++;
      }
    }
    console.log(this.correct);
    this.addScore(form.name, this.correct).subscribe();
  }

  navigateToResults() {
    this.router.navigate(["results"]);
  }

  navigateToQuiz() {
    this.router.navigate(["quiz"]);
  }

  navigateToScores() {
    this.router.navigate(["scores"]);
  }

  returnCurrentAnswers() {
    return this.submittedAnswers;
  }

  returnQuizQuestions() {
    return this.quizQuestions;
  }

  returnNumberOfCorrect() {
    return this.correct;
  }

  // getAllScores(): Observable<any> {
  //   return this.http.get("http://localhost:3000/scores", {
  //     responseType: "json"
  //   });
  // }

  // postScore(username: string, score: number): Observable<any> {
  //   return this.http.post(
  //     "http://localhost:3000/scores",
  //     { username, score },
  //     {
  //       responseType: "json"
  //     }
  //   );
  // }
}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultsComponent } from "./results/results.component";
import { ScoresComponent } from "./scores/scores.component";

const routes: Routes = [
  { path: "", redirectTo: "/quiz", pathMatch: "full" },
  { path: "quiz", component: QuizComponent },
  { path: "results", component: ResultsComponent },
  { path: "Scores", component: ScoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

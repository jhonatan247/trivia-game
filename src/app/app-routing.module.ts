import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateTriviaComponent } from './components/generate-trivia/generate-trivia.component';

const routes: Routes = [{ path: '', component: GenerateTriviaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateTriviaComponent } from './components/generate-trivia/generate-trivia.component';
import { TriviaAdminComponent } from './components/trivia-admin/trivia-admin.component';

@NgModule({
  declarations: [AppComponent, GenerateTriviaComponent, TriviaAdminComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

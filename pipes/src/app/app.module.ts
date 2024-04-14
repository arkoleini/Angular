
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustappComponent } from './CustomPipe2/cusapp.component';
import { ShortenPipe } from './CustomPipe2/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustappComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

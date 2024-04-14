import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFilterPipe  } from '../filter/serverTypeFilter.component';  


@NgModule({
  declarations: [
    AppComponent,
    CustomFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

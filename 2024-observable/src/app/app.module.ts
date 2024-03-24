import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import{ SubscribeService } from './subscribe.service';
import { CustomeObservableComponent } from './custome-observable/custome-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CustomeObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

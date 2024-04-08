import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        username: new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
    });
  }
  signupForm: FormGroup;
  genders = ['male', 'female'];
  forbiddenUserNames = ['root', 'admin', 'user'];

  onSubmit() {
    console.log(this.signupForm.value);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean }{
    if (this.forbiddenUserNames.indexOf(control.value)> -1  ) {
      return { 'nameIsForbidden': true };
    }
    else {
      return null;
    }
  }
}

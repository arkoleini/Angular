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
      username: new FormControl(null, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('male'),
    });
  }
  signupForm: FormGroup;
  genders = ['male', 'female'];

  onSubmit() {
    console.log(this.signupForm.value);
  }
}

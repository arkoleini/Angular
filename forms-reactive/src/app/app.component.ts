import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        email: new FormControl('', [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl('male'),
    });

    this.signupForm?.valueChanges.subscribe(data => {
      console.log(`***valueChanges: ${JSON.stringify(data)}`);
    });

    this.signupForm?.statusChanges.subscribe(data => {
      console.log(`***statusChanges: ${JSON.stringify(data)}`);
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


forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'test@test.com') {
        resolve({ 'emailIsForbidden': true });
      } else {
        resolve(null);
      }
    }, 1500);
  });
  return promise;
}

}

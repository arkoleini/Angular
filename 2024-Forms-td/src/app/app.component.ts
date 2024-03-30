import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myform') myform: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  suggestUser() {
  /* if need to set default value for form control, use setValue() method */

    // this.myform.setValue({
    //   userData: {
    //     username: 'Superuser',
    //     email: 'example@email.com', // Set email to empty string or provide a default value
    //   },
    //   secret: {
    //     SecretQuestion: '', // Set SecretQuestion to empty string or provide a default value
    //     secretAnswer: '',   // Set secretAnswer to empty string or provide a default value
    //   }
    // });

    /* if neded to set default value for form group, use patchValue() method */
    this.myform.form.patchValue({
      userData: {
        username: 'Superuser',
        email: 'example@email.com', // Set email to empty string or provide a default value
      },
      secret: {
        SecretQuestion: '', // Set SecretQuestion to empty string or provide a default value
        secretAnswer: '',   // Set secretAnswer to empty string or provide a default value
      }
    });
  }




  onSubmit() {
    if (this.myform.valid) {
      console.log(this.myform);
    } else {
      console.log('form is invalid');
      // Iterate over form controls and check for invalid fields
      
      
      for (const controlName in this.myform.controls) {
        const control = this.myform.controls[controlName];
        if (control.invalid) {
          console.log(`${controlName} is invalid`);

        }
      }
    }
  }
}

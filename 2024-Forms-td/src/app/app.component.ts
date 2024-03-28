import { Component, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('myform') myform: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    if (this.myform.valid) {
     console.log(this.myform);
  }
  else{
    console.log("form is invalid");
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

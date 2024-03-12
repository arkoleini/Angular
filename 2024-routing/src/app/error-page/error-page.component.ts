import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  /**
   *
   */
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    //Get data directly
    this.errorMessage = this.route.snapshot.data['message'];
    //or use this observable way
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }
}

import { Component } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';
import { CompanyComponent } from '../company/company.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,RouterLink,EmployeesComponent,CompanyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

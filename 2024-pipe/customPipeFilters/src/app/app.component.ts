import { Component } from '@angular/core';
import { Server } from '../model/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customPipeFilters';

  servers: Server[] = [
    {
      instanceType: 'Small',
      name: 'Server 1',
      status: 'Running',
      started: new Date('2024-04-13'),
    },
    {
      instanceType: 'Medium',
      name: 'Server 2',
      status: 'Stopped',
      started: new Date('2024-04-12'),
    },
    {
      instanceType: 'Large',
      name: 'Server 3',
      status: 'Running',
      started: new Date('2024-04-11'),
    },
    {
      instanceType: 'Small',
      name: 'Server 4',
      status: 'Running',
      started: new Date('2024-04-10'),
    },
    {
      instanceType: 'Medium',
      name: 'Server 5',
      status: 'Stopped',
      started: new Date('2024-04-09'),
    },
  ];
  filteredStatus: string = '';
  isFiltered: boolean = false;

  applyFilter(filterValue: string) {
    this.filteredStatus = filterValue;
    this.isFiltered = !!filterValue; // Set to true if filterValue is not empty  
  }
}

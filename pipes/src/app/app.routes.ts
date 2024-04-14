import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustappComponent } from  './CustomPipe2/cusapp.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'custapp', component: CustappComponent }
];

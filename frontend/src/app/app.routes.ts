import { Routes } from '@angular/router';
import { AuthpageComponent } from './authpage/authpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

export const routes: Routes = [ 
        {path:'', redirectTo:'welcomepage', pathMatch:'full'},
        {path: 'welcomepage', component: WelcomepageComponent},
        {path: 'authpage', component: AuthpageComponent},

];


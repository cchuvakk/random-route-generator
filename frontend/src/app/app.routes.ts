import { RouterModule, Routes } from '@angular/router';
import { AuthpageComponent } from './authpage/authpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NgModule } from '@angular/core';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [ 
        {path:'', redirectTo:'/welcomepage', pathMatch:'full'},
        {path: 'welcomepage', component: WelcomepageComponent},
        {path: 'authpage', component: AuthpageComponent},
        {path: 'mainpage', component: MainpageComponent}
];

@NgModule({
        imports:[RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule{}


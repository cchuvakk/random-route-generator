import { RouterModule, Routes } from '@angular/router';
import { AuthpageComponent } from './pages/authpage/authpage.component';
import { WelcomepageComponent } from './pages/welcomepage/welcomepage.component';
import { NgModule } from '@angular/core';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';

export const routes: Routes = [ 
        {path:'', redirectTo:'/welcomepage', pathMatch:'full'},
        {path: 'welcomepage', component: WelcomepageComponent},
        {path: 'authpage', component: AuthpageComponent},
        {path: 'mainpage', component: MainpageComponent},
        {path: 'profilepage', component:ProfilepageComponent},
        {path: 'aboutpage', component:AboutpageComponent}
];

@NgModule({
        imports:[RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule{}


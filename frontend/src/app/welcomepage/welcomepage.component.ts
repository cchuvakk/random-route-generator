import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login_service';
import { ToasterService } from '../toaster/toaster.service';

@Component({
  selector: 'app-welcomepage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {
  email: string = '';
  password: string = '';
  
  constructor(private router: Router,
    private loginService: LoginService,
    private toasterService: ToasterService
  ) {}
  


  onLogin(){
    console.log('входим с ',{email:this.email, password:this.password});
    this.loginService.login(this.email, this.password).then(() => {
      this.toasterService.success('Успешно!', 'Вы вошли в аккаунт!'),
      this.router.navigate(['/mainpage']); 
    }).catch((error) => {

    });
  }
  navigateToRegister() {
    this.router.navigate(['/authpage']); 
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login_service';

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
    private loginService: LoginService
  ) {}

  onLogin(){
    this.loginService.login(this.email, this.password).then(() => {
      this.router.navigate(['/authpage']); //изменить на main
    }).catch((error) => {
      console.error('Ошибка входа:', error);
      alert('Неверный email или пароль');
    });
  }
  navigateToRegister() {
    this.router.navigate(['/authpage']); 
  }
}

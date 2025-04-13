import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth_service';



@Component({
  selector: 'app-authpage',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
  ],
  templateUrl: './authpage.component.html',
  styleUrl: './authpage.component.css'
})
export class AuthpageComponent {
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService){}
  

  onRegister(){
    if (this.password !== this.confirmPassword) {
      return console.log('Пароли не совпадают');
  }

  this.authService.register(this.email, this.password)
      .then(user => console.log('Зарегистрирован:', user))
      .catch(err => console.error('Ошибка регистрации:', err.message));
 }
}


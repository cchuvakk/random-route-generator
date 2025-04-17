import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth_service';
import { ToasterService } from '../../toaster/toaster.service';
import { Router } from '@angular/router';



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

  constructor(private router: Router,private authService: AuthService,
 private toasterService: ToasterService
  ){}
  

  onRegister(): void {
    if (this.password !== this.confirmPassword) {
      this.toasterService.error("Ошибка", "Пароли не совпадают!");
      return; 
    }
  
    this.authService.register(this.email, this.password)
      .then(() => {
        this.toasterService.success('Успешно!', 'Вы успешно зарегистрировались!');
        this.router.navigate(['/welcomepage']);
      })
  }  
}


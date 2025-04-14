import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login_service';
import { ToasterService } from '../toaster/toaster.service';
import { PsresetService } from '../../services/psreset_service';

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
    private toasterService: ToasterService,
    private psresetService: PsresetService
  ) {}
  


  onLogin(){
    this.loginService.login(this.email, this.password).then(() => {
      this.toasterService.success('Успешно!', 'Вы вошли в аккаунт!'),
      this.router.navigate(['/mainpage']); 
    }).catch((error) => {
      this.toasterService.error('Ошибка!', 'Что то пошло не так D:')
    });
  }

  navigateToRegister() {
    this.router.navigate(['/authpage']); 
  }

  passwordReset(){
    this.psresetService.psreset(this.email).then(()=>{
      this.toasterService.warning('Хм0_0', 'На вашу почту выслано письмо с подтверждением!')
    })
  }
}

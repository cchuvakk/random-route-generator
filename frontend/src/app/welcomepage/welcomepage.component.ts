import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  imports: [],
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {
  user: string = '';
  password: string = '';
  //passwordAccept: string = '';

  constructor(private router: Router) {}

  onLogin(){

  }//заглушка

}

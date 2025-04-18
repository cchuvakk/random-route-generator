import { Component } from '@angular/core';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {
  userEmail : string = '';

  constructor(){
    const auth = getAuth();
    const user = auth.currentUser;
    this.userEmail = user?.email ?? 'Не зареган!';
  }
}

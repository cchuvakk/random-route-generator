import { Component, inject, Renderer2, OnInit } from '@angular/core';
import { RouterOutlet,NavigationEnd } from '@angular/router';
import { ToasterComponent } from './toaster/toaster.component';
import { filter } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToasterComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'frontend';
  shouldShowMenu(): boolean {
    return !['/welcomepage', '/authpage'].includes(this.router.url);
  }
  sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleSidebarLeave(){
    this.sidebarVisible = false;
  }

}

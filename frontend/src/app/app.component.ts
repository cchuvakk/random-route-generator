import { Component, inject, Renderer2, OnInit } from '@angular/core';
import { RouterOutlet,NavigationEnd } from '@angular/router';
import { ToasterComponent } from './toaster/toaster.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

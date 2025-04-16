import { Component } from '@angular/core';
//import * as L from 'leaflet'; (npm install leaflet) (npm i --save-dev @types/leaflet)


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleSidebarLeave(){
    this.sidebarVisible = false;
  }

}


/*
private map: L.Map | undefined;
implements AfterViewInit 
 private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

*/
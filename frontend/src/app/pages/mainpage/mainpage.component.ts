import { Component, AfterViewInit } from '@angular/core';
import maplibregl from 'maplibre-gl';
import { MAPTILER_KEY } from '../../../environments/environment';
import { Router, RouterModule } from '@angular/router';
//import * as L from 'leaflet'; (npm install leaflet) (npm i --save-dev @types/leaflet) --ошибка windows


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements AfterViewInit{

  constructor(private router: Router) {}

  navigateToWelcomePage() {
    this.router.navigate(['/welcomepage']);
  }

  ngAfterViewInit(): void {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',//с впн то `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`,
      center: [55.7522, 37.6156], 
      zoom: 7,
      attributionControl: false
    });

    /*map.on('click', (e) => {
      console.log('Клик по карте:', e.lngLat); //регает
    });*/
  }

}


/*
leaflet
private map: L.Map | undefined;
implements AfterViewInit 
 private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

*/

/*
maplibre
ngAfterViewInit(): void {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json',
      center: [13.4050, 52.5200], //мир
      zoom: 0
    });

    map.on('click', (e) => {
      console.log('Клик по карте:', e.lngLat);
    });
  }
*/
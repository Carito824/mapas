import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2xpbmFsZW9uIiwiYSI6ImNsaTg5NngzczB2OTUzbHI0cWRtczM4ZnkifQ.4J8egbTpWzBMQ0TUG81gVQ';

//verifica si navigetor no existe y genera mensaje de error

if(!navigator.geolocation) {
  alert("Navegador no soporta la Geolocation");
  throw new Error("Navegador no soporta la Geolocation")
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

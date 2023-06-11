import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation: [number, number] | undefined;

  get isUserLocationReady(): boolean {
    //la doble negacion es la primera es no hay un valor en el userLocation y la
    //segunda no hay un valor y lo niego
    return !!this.useLocation;
  }
  constructor() {

    this.getUserLocation();

  }
  //Se hace para poder convertir una promesa el navigator
  getUserLocation():Promise<[number,number]> {
    return new Promise( ( resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
      ({coords}) => {
          this.useLocation = [coords.longitude, coords.latitude]
          resolve(this.useLocation);
      },
      (err) => {
        alert('No se pudo obtener la Geolocalizacion')
        console.log(err);
        reject();
      }
    )
  });
}

}


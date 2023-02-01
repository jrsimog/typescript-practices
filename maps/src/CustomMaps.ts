import { User } from "./User";
import { Company } from "./Company";

// instruciones para todas las clases
// que requieran usar AddMarker 

export interface Mappable {
    location :{
        lat:number,
        lng:number
    }
    markerContent(): string;
    color: string
}

export class CustomMap  {
    private googleMap: google.maps.Map;
    constructor(mapitaId: string) {
        let elMapaElement = document.getElementById(mapitaId);
        console.log(mapitaId);
        this.googleMap = new google.maps.Map( elMapaElement ,{
            zoom:  1,
            center:{
                lat:0,
                lng:0
            }
        });
    }

    addMarker(mappable:Mappable):void{
        let marker = new google.maps.Marker({
                map:this.googleMap,
                position: {
                    lat:mappable.location.lat,
                    lng:mappable.location.lng
                }
             }
        );

        marker.addListener('click',()=>{
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infowindow.open(this.googleMap, marker);
        });
    }
}
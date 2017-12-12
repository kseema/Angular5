import { Injectable } from '@angular/core';


@Injectable()
export class ProductDataService {
data:any;
  constructor() { }
  getData(){
   return this.data=
    [
        {
            "vin":"ee8a89d8",
            "brand":"Fiat",
            "year":1987,
            "color":"Maroon"
        },
        {
            "vin":"642b3edc",
            "brand":"Renault",
            "year":1968,
            "color":"White"
        },
        {
            "vin":"19ec7580",
            "brand":"Renault",
            "year":1981,
            "color":"Black"
        },
        {
            "vin":"39980f30",
            "brand":"VW",
            "year":1986,
            "color":"Red"
        },
        {
            "vin":"ec9cc4e4",
            "brand":"Fiat",
            "year":1981,
            "color":"Brown"
        },
        {
            "vin":"a6ccc2d8",
            "brand":"Honda",
            "year":1994,
            "color":"Blue"
        },
        {
            "vin":"c1f15f28",
            "brand":"Volvo",
            "year":1999,
            "color":"Black"
        },
        {
            "vin":"161512ce",
            "brand":"VW",
            "year":1962,
            "color":"Black"
        },
        {
            "vin":"16e0b448",
            "brand":"Fiat",
            "year":1990,
            "color":"Green"
        },
        {
            "vin":"f0734442",
            "brand":"Audi",
            "year":1966,
            "color":"Orange"
        }
    ]
}

  
}

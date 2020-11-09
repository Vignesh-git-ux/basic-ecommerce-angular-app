import { Injectable } from '@angular/core';
import { timeout, delay } from 'q';
import { Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loadingService: LoadingService) { }

  products = [
    {
      id: 1,
      text: "Everfresh Flowers",
      image: ["../../assets/Nike1.jpg"]
    },
    {
      id: 2,
      text: "Festive Deer",
      image: ["../../assets/Nike2.jpg"]
    },
    {
      id: 3,
      text: "Morning Greens",
      image: ["../../assets/Nike4.jpg"]
    },
    {
      id: 4,
      text: "Everfresh Flowers",
      image: ["../../assets/Nike3.jpg"]
    },
    {
      id: 5,
      text: "Festive Deer",
      image: ["../../assets/Nike2.jpg"]
    },
    {
      id: 6,
      text: "Everfresh Flowers",
      image: ["../../assets/Nike1.jpg"]
    },
    {
      id: 7,
      text: "Festive Deer",
      image: ["../../assets/Nike4.jpg"]
    },
    {
      id: 8,
      text: "Morning Greens",
      image: ["../../assets/Nike3.jpg"]
    },
    {
      id: 9,
      text: "Everfresh Flowers",
      image: ["../../assets/Nike2.jpg"]
    },
    {
      id: 10,
      text: "Festive Deer",
      image: ["../../assets/Nike1.jpg"]
    },
    {
      id: 11,
      text: "Morning Greens",
      image: ["../../assets/Nike4.jpg"]
    },
    {
      id: 12,
      text: "Everfresh Flowers",
      image: ["../../assets/Nike3.jpg"]
    },
    {
      id: 13,
      text: "Festive Deer",
      image: ["../../assets/Nike1.jpg"]
    },
    {
      id: 14,
      text: "Everfresh Flowers",
      image: ["../../assets/Nike2.jpg"]
    },

  ];


  simillarProducts = [
    {
      id: 1,
      text: "Everfresh Flowers",
      image: ["../../assets/Nike4 .jpg"]
    },
    {
      id: 2,
      text: "Festive Deer",
      image: ["../../assets/Nike3.jpg"]
    },
    {
      id: 3,
      text: "Morning Greens",
      image: ["../../assets/Nike2.jpg"]
    },
    {
      id: 4,
      text: "Everfresh Flowers",
      image: ["../../assets/Nike1.jpg"]
    },
  ];

  getAllProducts(): any {
    return this.products;
  }

  getSimillarProducts(): any {
    return this.simillarProducts;
  }

  public getSingleProduct(id: number): Observable<any> {
    let temp: any;
    this.products.forEach(element => {
      if (element.id == id) {
            temp = element;
      }
    });
    const loading = false;
    this.loadingService.progressEnable.next(loading);
    return new Observable((observer) => observer.next(temp));
  }
}

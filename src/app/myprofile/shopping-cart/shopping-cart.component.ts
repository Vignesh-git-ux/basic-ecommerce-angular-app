import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  
  cart = [
    {
      text: "Everfresh Flowers",
      image: "../../assets/Nike1.jpg"
    },
    {
      text: "Festive Deer",
      image: "../../assets/Nike2.jpg"
    },
    {
      text: "Morning Greens",
      image: "../../assets/Nike3.jpg"
    },
    {
      text: "Everfresh Flowers",
      image: "../../assets/Nike4.jpg"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

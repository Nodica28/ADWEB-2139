import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  logobot:string="/assets/logobottom.jpg"
  logobeast:string="/assets/beastfooterlogo.png"
  foottext1 ="Mr Beast official online storefront offering authentic and brand approved merchandise and products. Powered by Merchline / RIVALS group, brand management partners to the entertainment industry."
  foottext2 ="© 2022 MrBeast Official. Powered by Merchline.com • RIVALS // GRP"

  //Shirts
  Item1:string = "/assets/shirt1.webp"
  Item2:string = "/assets/shirt2.jpg"
  Item3:string = "/assets/shirt3.jpg"
  Item4:string = "/assets/shirt4.jpg"
  Item5:string = "/assets/shirt5.jpg"
  Item6:string = "/assets/shirt6.webp"
  Item7:string = "/assets/shirt7.webp"
  Item8:string = "/assets/shirt8.webp"
  Item9:string = "/assets/shirt9.webp"
  //Hoodies
  Item10:string = "/assets/Hoodie1.webp"
  Item11:string = "/assets/Hoodie2.webp"
  Item12:string = "/assets/Hoodie3.webp"
  Item13:string = "/assets/Hoodie4.jpg"
  //Joggers
  Item14:string = "/assets/Jogger1.webp"
  Item15:string = "/assets/Jogger2.webp"
  Item16:string = "/assets/Jogger3.webp"
  Item17:string = "/assets/Jogger4.webp"
  //Bags
  Item18:string = "/assets/Backpack1.webp"
  Item19:string = "/assets/Rucksack1.webp"
  //Accessories
  Item20:string = "/assets/Waterbottle1.webp"
  Item21:string = "/assets/Wristband1.webp"
  constructor() { }

  ngOnInit(): void {
  }

}

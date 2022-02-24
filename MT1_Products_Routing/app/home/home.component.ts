import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cover:string = "/assets/BG.png"
  newdes:string = "/assets/MB_Launch-Banner.mp4"
  tees:string = "/assets/Tees.webp"
  hoodies:string = "/assets/Hoodies.webp"
  joggers:string = "/assets/Joggers.webp"
  ship:string = "/assets/MB-FREE-SHIPPING.mp4"
  summer:string = "/assets/MB-Backpack-Banner.gif"
  bag:string="/assets/MrBeast-Drop.gif"
  youth:string="/assets/Tiles1.webp"
  hoodies2:string="/assets/Tiles2.webp"
  accessories:string="/assets/Tiles3.webp"
  headwear:string="/assets/Tiles4.webp"
  return:string="/assets/Return.webp"
  payment:string="/assets/Payment.webp"
  logobot:string="/assets/logobottom.jpg"
  logobeast:string="/assets/beastfooterlogo.png"
  foottext1 ="Mr Beast official online storefront offering authentic and brand approved merchandise and products. Powered by Merchline / RIVALS group, brand management partners to the entertainment industry."
  foottext2 ="© 2022 MrBeast Official. Powered by Merchline.com • RIVALS // GRP"

  constructor() { }

  ngOnInit(): void {
  }

}

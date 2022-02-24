import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about:string = "/assets/beast.png";
  logobot:string="/assets/logobottom.jpg"
  logobeast:string="/assets/beastfooterlogo.png"
  foottext1 ="Mr Beast official online storefront offering authentic and brand approved merchandise and products. Powered by Merchline / RIVALS group, brand management partners to the entertainment industry."
  foottext2 ="© 2022 MrBeast Official. Powered by Merchline.com • RIVALS // GRP"
  constructor() { }

  ngOnInit(): void {
  }

}

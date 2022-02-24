import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  notfound:string = "/assets/NotFound.png"
  foottext1 ="Mr Beast official online storefront offering authentic and brand approved merchandise and products. Powered by Merchline / RIVALS group, brand management partners to the entertainment industry."
  foottext2 ="© 2022 MrBeast Official. Powered by Merchline.com • RIVALS // GRP"
  constructor() { }

  ngOnInit(): void {
  }

}

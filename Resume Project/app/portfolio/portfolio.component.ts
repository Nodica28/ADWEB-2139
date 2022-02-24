import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  inst:string = "/assets/Instagram Logo.png"
  gmail:string = "/assets/Gmail Logo.png"
  fb:string = "/assets/Facebook Logo.png"
  logo:string = "/assets/Logo.png"
  html:string = "/assets/HTML.png"
  startup:string = "/assets/startup.png"
  lacalle:string = "/assets/LaCalle Website.png"
  mrbeast:string = "/assets/MrBeast Website.jpg"
  restaurant:string = "/assets/Restaurant.jpg"
  library:string = "/assets/Library Database.png"
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inst:string = "/assets/Instagram Logo.png"
  gmail:string = "/assets/Gmail Logo.png"
  fb:string = "/assets/Facebook Logo.png"
  logo:string = "/assets/Logo.png"
  pose:string = "/assets/Home Pose stroke.png"
  

  constructor() { }

  ngOnInit(): void {
  }

}

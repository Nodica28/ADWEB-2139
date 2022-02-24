import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  inst:string = "/assets/Instagram Logo.png"
  gmail:string = "/assets/Gmail Logo.png"
  fb:string = "/assets/Facebook Logo.png"
  logo:string = "/assets/Logo.png"
  pose:string = "/assets/About Me Pose stroke.png"

  constructor() { }

  ngOnInit(): void {
  }

}

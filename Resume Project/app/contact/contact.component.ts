import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  inst:string = "/assets/Instagram Logo.png"
  gmail:string = "/assets/Gmail Logo.png"
  email:string = "/assets/Email.png"
  fb:string = "/assets/Facebook Logo.png"
  twit:string = "/assets/Twitter.png"
  phone:string = "/assets/Call.png"
  logo:string = "/assets/Logo.png"
  pose:string = "/assets/Home Pose stroke.png"
  constructor() { }

  ngOnInit(): void {
  }

}

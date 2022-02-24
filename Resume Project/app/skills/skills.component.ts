import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  inst:string = "/assets/Instagram Logo.png"
  gmail:string = "/assets/Gmail Logo.png"
  fb:string = "/assets/Facebook Logo.png"
  logo:string = "/assets/Logo.png"
  html:string = "/assets/HTML.png"
  javascript:string = "/assets/JavaScript.png"
  css:string = "/assets/CSS.png"
  php:string = "/assets/Php.png"
  java:string = "/assets/Java.png"
  python:string = "/assets/Python.png"
  blender:string = "/assets/Blender.png"
  premiere:string = "/assets/Premiere Pro.png"
  photoshop:string = "/assets/Photoshop.png"
  constructor() { }

  ngOnInit(): void {
  }

}

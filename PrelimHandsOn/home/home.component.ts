import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'PrelimHandsOn';


  //Image Binding
  bg:string = "assets/images/City.jpg";
  place1:string = 'assets/images/France.jpg';
  place2:string = 'assets/images/Seoul.jpg';
  place3:string = 'assets/images/San Francisco.jpg';
  place4:string = 'assets/images/Boston.jpg';

  //String Interpolation
  Intro1 = "Research Conferences";
  Intro2 = "Join our online events this 2021!";
  join = "Join our Research Conferences around the Globe!";
  pname1="France";
  pname2="Seoul";
  pname3="San Francisco";
  pname4="Boston";

  //Style Binding
  links="blue"
  constructor() { }

  ngOnInit(): void {
  }

}

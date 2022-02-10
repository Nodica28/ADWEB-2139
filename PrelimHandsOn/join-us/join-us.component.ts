import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  fillintro="Fill the form below:"

  Firstname = "";
  Lastname = "";
  Email = "";
  School="";

  constructor() { }

  ngOnInit(): void {
  }

}

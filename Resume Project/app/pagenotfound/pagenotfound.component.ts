import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  logo:string = "/assets/Logo.png"
  notfound:string = "/assets/NotFound.png"
  constructor() { }

  ngOnInit(): void {
  }

}

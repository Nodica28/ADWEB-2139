import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  //String Interpolation
  intro="Below are our Corporate Partners";
  header1="Company";
  header2="Trademark";
  header3="Sponsorship";
  header4="Go to Website";

  list= [];

  partners: any[] = [{
    compname: "Microsoft",
    logo: "assets/images/Microsoft.png",
    type: "Platinum",
    link: "https://www.microsoft.com/en-ph",
  },
  {
    compname: "Apple, Inc.",
    logo: "assets/images/Apple.svg",
    type: "Gold",
    link: "https://www.apple.com/ph/",
  },
  { compname: "Amazon",
    logo: "assets/images/Amazon.svg",
    type: "Silver",
    link: "https://www.amazon.com/",
  },
  { compname: "Google, Inc.",
   logo: "assets/images/Google.png",
   type: "Bronze",
    link: "https://www.google.com/",
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  logobot:string="/assets/logobottom.jpg"
  logobeast:string="/assets/beastfooterlogo.png"
  foottext1 ="Mr Beast official online storefront offering authentic and brand approved merchandise and products. Powered by Merchline / RIVALS group, brand management partners to the entertainment industry."
  foottext2 ="© 2022 MrBeast Official. Powered by Merchline.com • RIVALS // GRP"

  list= [1,2,3,4,5]

  Products = [
    {
      id: "#SHL0001",
      image: "/assets/shirt1.webp",
      name: "'BEAST' NIKE LEGEND - BLUE (T-Shirt)",
      description: "This Shirt is a blue variation and sponsored by Nike and it is made with stretchable material so that when you exercise it is flexible."
    },
    {
      id: "#SHL0002",
      image: "/assets/shirt2.jpg",
      name: "'BEAST' NIKE LEGEND - RED (T-Shirt)",
      description: "This Shirt is a red variation and sponsored by Nike and it is made with stretchable material so that when you exercise it is flexible."
    },
    {
      id: "#SHL0003",
      image: "/assets/shirt3.jpg",
      name: "MRBEAST 'INFINITY BOX' (T-Shirt)",
      description: "This printed Mr Beast shirt has a graphic representation of a infinity box which it just never ends."
    },

    {
      id: "#SHL0004",
      image: "/assets/shirt4.jpg",
      name: "BEAST 'STEALTH' (T-Shirt)",
      description: "With some stealth printed with an image of a camo black and gray with black color base."
    },
    {
      id: "#SHL0005",
      image: "/assets/shirt5.jpg",
      name: "'MRBEAST GRAFFITI BEAST (T-Shirt)",
      description: "Graffiti are not always sprayed onto the walls, they can be used to decorate shirts also just like this Graffiti beast shirt."
    },
    {
      id: "#SHL0006",
      image: "/assets/shirt6.webp",
      name: "MRBEAST GAMING REFLECTIVE (T-Shirt)",
      description: "All gamers always play video games at night and with their added rgb peripherals  they can add effect to the illumination of this reflective gaming shirt."
    },


    {
      id: "#SHL0007",
      image: "/assets/shirt7.webp",
      name: "BEAST GAMING 'SUB OR ELSE' REFLECTIVE (T-Shirt)",
      description: "Sub or Else gaming edition of Mr Beast Shirt is a commemoration of a famous lines which were used by youtubers asking for subscriptions."
    },
    {
      id: "#SHL0008",
      image: "/assets/shirt8.webp",
      name: "BEAST GAMING 'AVATAR' (T-Shirt)",
      description: "Avatar Shirt is a representation of the minecraft game where the world is build with blocks."
    },
    {
      id: "#SHL0009",
      image: "/assets/shirt9.webp",
      name: "BEAST GAMING 'LOADING' (T-Shirt)",
      description: "Loading times are worse, this shirt will display the loading progress of your current mood."
    },


    {
      id: "#SHL0010",
      image: "/assets/Hoodie1.webp",
      name: "BEAST GAMING REFLECTIVE (Hoodie)",
      description: "Another varitation of the Reflective Gaming Shirt Edition of Mr Beast Shirts but on a Hoodie."
    },
    {
      id: "#SHL0011",
      image: "/assets/Hoodie2.webp",
      name: "MRBEAST 'INFINITY BOX' (Hoodie)",
      description: "Infinity Box where the print doesn't stop. It is printed on a Hoodie."
    },
    {
      id: "#SHL0012",
      image: "/assets/Hoodie3.webp",
      name: "BEAST INVERTED BOX LOGO HOODIE (Hoodie)",
      description: "This comportable hoodie is design to showcase the inverted bog logo."
    },


    {
      id: "#SHL0013",
      image: "/assets/Hoodie4.jpg",
      name: "'FROSTED BEAST' CHAMPION PULLOVER (Hoodie)",
      description: "Frosted donuts are the best! They can be printed as a design just like this hoodie to show that it's you favorite dessert."
    },
    {
      id: "#SHL0014",
      image: "/assets/Jogger1.webp",
      name: "BEAST 'ICON' (Joggers)",
      description: "Joggers are comfy as ever, with this Beast Icon Joggers you would feel as if your riding the clouds."
    },
    {
      id: "#SHL0015",
      image: "/assets/Jogger2.webp",
      name: "MRBEAST 'INFINITY' (Joggers)",
      description: "This jogger can be paired with the Infinity Variation of Shirt or Hoodie making you feel the vast infinite universe."
    },


    {
      id: "#SHL0016",
      image: "/assets/Jogger3.webp",
      name: "MRBEAST 'HIGH ROLLER' (Joggers)",
      description: "High Roller joggers provides comfortable cloth for the owner and makes them fly high."
    },
    {
      id: "#SHL0017",
      image: "/assets/Jogger4.webp",
      name: "BEAST INVERTED BOX LOGO (Joggers)",
      description: "This can be paired with the Inverted Box Logo from the Hoodie Section. Grabe them as a pair now!"
    },
    {
      id: "#SHL0018",
      image: "/assets/Backpack1.webp",
      name: "BEAST SPECTRUM REFLECTIVE LOGO CHAMPION (Backpack)",
      description: "Tired of carrying so many things? Purchase this backpack now with more compartments than ever before, made with durable material. This will surely help you on your journerys."
    },


    {
      id: "#SHL0019",
      image: "/assets/Rucksack1.webp",
      name: "BEAST SPECTRUM REFLECTIVE NIKE HERITAGE (Backpack)",
      description: "Printed with a Nike Logo, this backpack will surely provides your needs for carrying heavy items and back support."
    },
    {
      id: "#SHL0020",
      image: "/assets/Waterbottle1.webp",
      name: "'BEAST' 32OZ WIDE-MOUTH NALGENE (Water Bottle)",
      description: "Tired of getting back and fort to get some water? You can purchase this 32oz water bottle with printed Beast Logo."
    },
    {
      id: "#SHL0021",
      image: "/assets/Wristband1.webp",
      name: "BEAST WRISTBAND 4-PACK (WristBands)",
      description: "This wristbands will show how much you support the Mr Beast Community along with their propaganda and charities."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

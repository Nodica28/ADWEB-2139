import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngdemo-1';
   //String binding
   Intro = "Good day! My name is Justine A. Nicdao.";

   //Property Binding
   MyName:string = 'Justine A. Nicdao';

   //Style Binding
   color = "red";

   //Class Binding
   ApplyCssClass = "green";
   DontApplyCssClass = false;

   getData(data: any)
    {
     console.warn(data);
     }
     showData ($event: any)
     {
     console.log("button is clicked" ); if($event)
     {
     console.log($event.target);
     console.log($event.target.value);
    }
    }
}

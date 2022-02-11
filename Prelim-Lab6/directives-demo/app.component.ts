import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-demo';
  logInName = 'admin';
  isLogIn:boolean = false;
  isLogOut:boolean = true;

  list = [1, 2, 3, 4, 5];

  studentArr: any[] = [
  {"id": 1,"name": "Justine"},
  {"id": 2,"name": "Johnell"},
  {"id": 3,"name": "Joshua"},
  {"id": 4,"name": "Ranielle"}
  ]
  trackByData(index:number, studentArr:any): number
  {
    return studentArr.id;
  }

     //ngFor Statement (Angular - Display a list items)
     staff = [
      { firstname: "Justine", lastname: "Nicdao", email: "justine28@gmail.com", role: "User"},
      { firstname: "Ranielle", lastname: "Nicdao", email: "ranielle0506@gmail.com", role: "Admin"},
      { firstname: "Joshua", lastname: "Nicdao", email: "joshua05@gmail.com", role: "User"},
    ];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {
  logo:string = "assets/Holy Logo.png";
  intro = "Welcome to the student Gradebook!";

  //APPDEV
  student_name1 = "";
  student_num1 = 0;
  prelim_grade1 = 0;
  midterm_grade1 = 0;
  final_grade1 = 0;

  //ADDWEB
  student_name2 = "";
  student_num2 = 0;
  prelim_grade2 = 0;
  midterm_grade2 = 0;
  final_grade2 = 0;

  //CLOUDCOMP
  student_name3 = "";
  student_num3 = 0;
  prelim_grade3 = 0;
  midterm_grade3 = 0;
  final_grade3 = 0;

  //WEBDEVFOL
  student_name4 = "";
  student_num4 = 0;
  prelim_grade4 = 0;
  midterm_grade4 = 0;
  final_grade4 = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  type = 'campany'; 
  type1 = 'candidate';
  constructor() { }

  ngOnInit(): void {
  }
  changeType(e : any) {
    this.type=e.target.value;
  }
  changeType1(e : any) {
    this.type=e.target.value;
  }
  
}

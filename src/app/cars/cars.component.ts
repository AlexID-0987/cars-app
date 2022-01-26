import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/people.service';
import { PeopleComponent } from '../people/people.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
   
  constructor(private qua:PeopleService) { }

  ngOnInit(): void {
  }
 additem(data:any){
   this.qua.addpeople(data)
 }
}

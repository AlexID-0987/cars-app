import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persone } from 'src/Persone';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  url='http://localhost:3000/posts';
  PERSONE:Persone[]=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getapi()
  }

  getapi(){
    this.http.get<Persone[]>(this.url)
    .subscribe(pers=>this.PERSONE=pers)
  }

}

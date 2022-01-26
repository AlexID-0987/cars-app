import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quantity } from './Quantity';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
url='http://localhost:3000/posts'
quant:Quantity[]=[]
  constructor(private http:HttpClient) { }

  addpeople(data:any){
    this.http.post<Quantity[]>(this.url,{name:data.name,lastname:data.last,surname:data.sur,
    car:data.car,number:data.registr,model:data.model,
  year:data.year}).subscribe((a)=>(console.warn(this.quant)))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allpeoples } from 'src/allpeoples';

@Injectable({
  providedIn: 'root'
})
export class ALLService {
url='http://localhost:3000/posts';
allp:allpeoples[]=[]
  constructor(private http:HttpClient) { }

  getall():Observable<allpeoples[]>{
    return this.http.get<allpeoples[]>(this.url)
  }

  deleteitems(dataid:any){
    const ul=`${this.url}/${dataid}`;
    return this.http.delete(ul).subscribe((rez)=>console.warn("ok"))
  }
  updatecomp(idea:allpeoples,body:any){
    const ur=`${this.url}/${idea}`;
    return this.http.put<allpeoples[]>(ur,body)
    .subscribe((a)=>console.warn(a))
  }
}

import { Component, OnInit } from '@angular/core';
import { allpeoples } from 'src/allpeoples';
import { ALLService } from '../all.service';

@Component({
  selector: 'app-manypeople',
  templateUrl: './manypeople.component.html',
  styleUrls: ['./manypeople.component.css']
})
export class ManypeopleComponent implements OnInit {

  al:allpeoples[]=[]
  NAME:String=" ";
  LAST:String=" ";
  SUR:String=" ";
  CAR:String=" ";
  NUMBER:String=" ";
  MOD:String=" ";
  YEAR:String=" ";
  QAN:String=" "
  visib:boolean=false;
  constructor(private ser:ALLService) { }

  ngOnInit(): void {
    this.getapi()
  }
 getapi(){
   this.ser.getall().subscribe((a)=>this.al=a)
 }
 delete(id:Number){
  this.ser.deleteitems(id)
 }
 update(item:any){
   let na=this.NAME;
   let la=this.LAST;
   let sur=this.SUR;
   let car=this.CAR;
   let num=this.NUMBER;
   let mod=this.MOD;
   let year=this.YEAR;
   let qua=this.QAN;
   const obj={id:item,name:na,lastname:la,surname:sur,car:car,number:num,model:mod,year:year,quantity:qua}
   this.ser.updatecomp(item,obj)
 }
 chancevis(){
   this.visib=!this.visib
 }
}

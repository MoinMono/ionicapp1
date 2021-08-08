import { literalArr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {
  variable: string = null;
  list:any=[];
  constructor(
    public local: LocalService
  ) {
this.showdata();
  }

  ngOnInit() {
  }
  echo() {
    console.log(
      this.local.Helloworld()
    )
    this.variable = this.local.Helloworld();
  }
  savename(value: string) {
    this.local.setdata("name", value);
    this.savearray(value);  
  }
  onclick() {
  if(this.variable!=null && this.variable!=""){
   this.savename(this.variable);
   this.showdata();
    }  else
  alert("ENter a Value");

  }

  savearray(value: string) {

    let array = this.local.getdataarray("name-array");

  //  if (array.length != 0) {
  //     array.push(value);
  //   }
  //   else {
  //     array.push()
  //   }
      array.push(value);
      this.local.setdataarray("name-array",array);
  }
  showdata(){
    let Array=this.local.getdataarray("name-array");
    if(Array.length>0){
      this.list=Array;
    
    }
else 
this.list.push("no data availble")
  }
}

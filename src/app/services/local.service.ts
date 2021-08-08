import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

Helloworld ():string { 
return "Hello World";

}

getdata(key:string):string{
  let data = localStorage.getItem(key);
  return data;

}
setdata(key:string, value:string){
  localStorage.setItem(key,value)
}

getdataarray(key:string):Array<any>{
  let data = localStorage.getItem(key);
  if(data!= null && data!=""){
  let arr=JSON.parse(data);
  return arr;}
  else {
    return [];
  }

}

setdataarray(key:string, value:Array<any>){
  localStorage.setItem(key,JSON.stringify(value));
}
}


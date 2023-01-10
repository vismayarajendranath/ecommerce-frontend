import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChocoApiService {
  searchTerm=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

//get all product details Api call
getproducts(){
  //api call
 return  this.http.get('http://localhost:3000/all-products')

}

viewproduct(id:any){
  return  this.http.get('http://localhost:3000/viewProduct/'+id)
}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList = new BehaviorSubject([])

  cartItemListArray:any=[]



  constructor() { }

  getProducts(){
    return this.cartItemList.asObservable()
  }

  addToCart(product:any){
    this.cartItemListArray.push(product)
    this.cartItemList.next(this.cartItemListArray)
    this.getTotalPrice()

  }

  removeItemCart(product:any){
    this.cartItemListArray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartItemListArray.splice(index,1)
      }
    })
    this.cartItemList.next(this.cartItemListArray)
  }
  getTotalPrice(){
    let grandTotal=0
    this.cartItemListArray.map((item:any)=>{
      grandTotal += item.price
      console.log(grandTotal);
      
    })
    return grandTotal
  }
}
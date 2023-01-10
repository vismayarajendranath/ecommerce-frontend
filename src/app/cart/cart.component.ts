import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any[]  = [];
    totalPrice=0


 
 

  constructor(private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe((data)=>{
      this.products=data
      console.log(this.products);
      // this.totalPrice=this.cartService.getTotalPrice()


      
      

    })
  }
    removeItemCart(item:any){
      this.cartService.removeItemCart(item)
    }
  }
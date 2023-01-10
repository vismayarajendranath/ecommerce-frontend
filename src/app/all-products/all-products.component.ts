import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ChocoApiService } from '../services/choco-api.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  search:any
  productDetails:any
  
  constructor(private productApi:ChocoApiService,private wlist:WishlistService,private cartService:CartService ) { }

  ngOnInit(): void {
    //asynchronous
    this.productApi.getproducts()
    .subscribe((result:any)=>{
      this.productDetails=result.products
      console.log(this.productDetails);
    
      
    })
    this.productApi.searchTerm.subscribe((data)=>{
      this.search=data
    })
  }

  // addtowishlist(product:any){
  //   this.wlist.addToWList(product)
  //   alert("Product added to wish list")


  // }
  
  // addToCart(product:any){
  //   this.cartService.addToCart(product)
  // }
}

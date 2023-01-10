import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ChocoApiService } from '../services/choco-api.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  chocoId:any
  restBody:any
  constructor(private activatedRoute:ActivatedRoute,
    private restService:ChocoApiService,private router:Router,private cartService:CartService,private wlist:WishlistService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.chocoId = data['id']
      
      
    })


    // api call
    this.restService.viewproduct(this.chocoId)
    .subscribe((result)=>{
      // console.log(result);
      this.restBody =result
      console.log( this.restBody);
      
    })
  }
  // addtowishlist(body:any){
  //   this.wlist.addToWList(body)
  //   alert("Product added to wish list")


  // }
  
  addToCart(restBody:any){
    this.cartService.addToCart(restBody)
  }
}
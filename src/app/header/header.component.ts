import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ChocoApiService } from '../services/choco-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItem=0

  constructor(private productService:ChocoApiService,private cartService: CartService) { }


  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe((data)=>{
      this.totalItem =data.length
    })
   
  }



  search(event:any){
    let searchValue=event.target.value
    this.productService.searchTerm.next(searchValue)
  }

}

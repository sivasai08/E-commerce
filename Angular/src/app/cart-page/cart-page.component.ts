import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.currentCart.subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }
  deletedata(data: any) {
    const updatedItems = this.cartItems.filter(cartItem => cartItem !== data);
    this.dataService.updateCart(updatedItems);  // ✅ Update the service
    this.cartItems = updatedItems;
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.productPrice, 0);
  }
  checkout() {
    
  }
}

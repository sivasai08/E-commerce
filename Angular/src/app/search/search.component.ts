/*import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/Product.service';
import { Subject, Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  ProductsList: any[] = [];
  inputs: string = '';
  products=inject(ProductService)
  storeValue(){

  }
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.products.get().subscribe(data => {
      this.ProductsList = data;

    })
  }
  senddata(products:any) {
    this.dataService.addItemToCart(products)
  }

  matchesSearch(product: any): boolean {
    return this.inputs.trim() === '' || product.productName.toLowerCase().includes(this.inputs.toLowerCase());
  }

}*/
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/Product.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ProductsList: any[] = [];
  inputs: string = '';  // This will automatically be updated with the input field's value
  products = inject(ProductService);

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products.get().subscribe(data => {
      this.ProductsList = data;
    });
  }

  senddata(products: any) {
    this.dataService.addItemToCart(products);
  }

  matchesSearch(product: any): boolean {
    return product.productName.toLowerCase().startsWith(this.inputs.toLowerCase());
  }
}


import { Component,inject,OnInit } from '@angular/core';
import { ProductService } from '../service/Product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';



@Component({
  selector: 'app-product-page',
  standalone:true,
  imports: [RouterModule,CommonModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  ProductsList: any[] = [];
  title = 'AngularProject1';
  products = inject(ProductService);

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.products.get().subscribe(data => {
      this.ProductsList = data;
      
    })
  }
  senddata(data: any) {
    this.dataService.addItemToCart(data)
  }
}

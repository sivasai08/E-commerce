import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from './service/Product.service';
import { HeaderComponent } from '../app/header/header.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ProductsList: any[] = [];
  title = 'AngularProject1';
  products = inject(ProductService);

 
  ngOnInit() {
    this.products.get().subscribe(data => {
      this.ProductsList = data;
      console.log('products', this.ProductsList);
    })
  }
}

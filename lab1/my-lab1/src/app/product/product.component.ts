import { Component } from '@angular/core';
import { DiscountOffers } from '../shared classes/DiscountOffers';
import { IProduct } from '../shared classes/IProduct';
import { ICategory } from '../shared classes/ICategory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  Discount = DiscountOffers.TenPercent;
  storeName = 'My Store';
  storeLogoUrl = 'assets/logo.png';
  ProductList: IProduct[] = [
    { ID: 1, Name: 'Product 1', Quantity: 10, Price: 100, Img: 'assets/product1.jpg' },
    { ID: 2, Name: 'Product 2', Quantity: 20, Price: 200, Img: 'assets/product2.jpg' },
    { ID: 3, Name: 'Product 3', Quantity: 30, Price: 300, Img: 'assets/product3.jpg' }
  ];
  CategoryList: ICategory[] = [
    { ID: 1, Name: 'Category 1' },
    { ID: 2, Name: 'Category 2' },
    { ID: 3, Name: 'Category 3' }
  ];
  ClientName = 'John Doe';
  IsPurchased = false;
}

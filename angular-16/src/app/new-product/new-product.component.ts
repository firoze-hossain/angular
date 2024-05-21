import {Component} from '@angular/core';
import {ProductData} from "../services/model/product-data";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  product: ProductData = {};

  constructor(private productService: ProductService,
              private router: Router) {
  }

  saveProduct() {
    this.productService.createProduct(this.product).subscribe({
      next: (data) => {
        this.router.navigate(['products']);
      }
    });
  }
}

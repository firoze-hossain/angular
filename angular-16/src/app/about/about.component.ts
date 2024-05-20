import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {ProductData} from "../services/model/product-data";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    // this.productService.getAllProductsWithLimit()
    //   .subscribe({
    //     next: (data): void => {
    //       console.log(data);
    //     }
    //   })
    const product: ProductData = {
      title: "Mac",
      description: "Hello Mac",
      price: 2005,
      category: "Computer",
      image: "http://hello.jpg"
    };
    this.productService.createProduct(product).subscribe({
      next: (data): void => {
        console.log(data);
      },
      error: (error: HttpErrorResponse): void => {
        if (error instanceof ErrorEvent) {
          console.error('An error occurred',error);
        } else {
          console.error(`server return status code ${error.status},error message:${error.message}`);
        }

      }
    })
  }

  // constructor(private activatedRoute: ActivatedRoute) {
  // }
  //
  // param: any;
  // queryParam: any;
  //
  // ngOnInit(): void {
  //   console.log(this.activatedRoute);
  //   this.param=this.activatedRoute.snapshot.params['username'];
  //   this.queryParam=this.activatedRoute.snapshot.queryParams['course'];
  // }


}

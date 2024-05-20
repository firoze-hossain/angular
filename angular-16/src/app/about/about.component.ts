import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProductsWithLimit()
      .subscribe({
        next: (data): void => {
          console.log(data);
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

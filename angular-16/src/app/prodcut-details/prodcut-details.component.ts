import {Component, Input} from '@angular/core';
import {ProductData} from "../services/model/product-data";

@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.scss']
})
export class ProdcutDetailsComponent {
  @Input()
  product: ProductData = {};
}

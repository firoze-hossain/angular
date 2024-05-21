import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductData} from "./model/product-data";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = "https://fakestoreapi.com/";

  constructor(private http: HttpClient) {
  }

  getAllProductsWithLimit(limit: number = 5): Observable<Array<ProductData>> {
    // const productUrl:string=this.baseUrl+"products?limit="+5;
    const productUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductData>>(productUrl);
  }

  createProduct(product: ProductData): Observable<ProductData> {
    const productUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductData>(productUrl, product);
  }
}

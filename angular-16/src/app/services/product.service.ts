import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = "https://fakestoreapi.com/";

  constructor(private http: HttpClient) {
  }

  getAllProductsWithLimit(limit: number = 5): Observable<any> {
    // const productUrl:string=this.baseUrl+"products?limit="+5;
    const productUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<any>(productUrl);
  }
}

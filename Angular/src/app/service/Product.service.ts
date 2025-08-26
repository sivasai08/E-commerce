import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})


export class ProductService {
  constructor() { }
  private http = inject(HttpClient);
  private apiURL = environment.apiURL + '/api/Product';
  private userApiUrl = environment.apiURL + '/api/User';
  public get(): Observable<any> {
    return this.http.get<Product[]>(this.apiURL);
  }
  public getUser(): Observable<any> {
    return this.http.get<User[]>(this.userApiUrl);
  }
  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiURL}/api/User/login`, {
      email,
      password
    });
  }
  


  // ✅ Register - send username, email, password
  public register(username: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(this.userApiUrl, {
      userName: username,
      userEmail: email,
      userPassword: password
    });
  }
}

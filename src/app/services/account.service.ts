import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../models/account";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  apiUrl = "http://localhost:3000/accounts";

  constructor(private http: HttpClient) { }

  getAccounts():Observable<Account[]>{
   return  this.http.get<Account[]>(this.apiUrl);
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, account, this.httpOptions);
  }

}

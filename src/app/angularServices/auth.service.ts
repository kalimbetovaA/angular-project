import {Injectable} from '@angular/core';
import {User} from '../user';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../category";

@Injectable()
export class AuthService {
  private loginUrl = 'sign-in';
  private isloggedIn = false;
  private loggedInUser: User | undefined;
  baseURL = 'http://localhost:3000';
  users!: User[];

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.baseURL + `/users`).subscribe(data => {
      this.users = data; });
  }


  isUserAuthenticated(tel: string, password: string): boolean {
        this.loggedInUser = this.users.find(user => (user.tel === tel) && (user.password === password));
        if (this.loggedInUser === undefined) {
          this.isloggedIn = false;
        } else {
          this.isloggedIn = true;
        }
        return this.isloggedIn;
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): User | undefined {
    return this.loggedInUser;
  }
  logoutUser(): void{
    this.isloggedIn = false;
  }
}

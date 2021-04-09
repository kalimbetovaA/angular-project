import {Injectable} from '@angular/core';
import {User} from '../user';

@Injectable()
export class AuthService {
  private loginUrl = 'sign-in';
  private isloggedIn = false;
  private loggedInUser: User | undefined;
  users = [
    new User(1, '8 (707) 7067673', 'araypass', 'Aray'),
    new User(1, '8 (707) 7777777', 'pass', 'Some User')
  ];

  getAllUsers(): User[] {
    return this.users;
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

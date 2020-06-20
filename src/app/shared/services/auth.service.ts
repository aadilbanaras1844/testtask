import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';


export interface User{
  name: string,
  username: string,
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    
  }
 
  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }
 
  register(params): Observable<any> {
    const simpleObservable = new Observable((observer) => {
    
      setTimeout(function(){
        observer.next({status: true});
        observer.complete()
      }, 2000);
      
    })
    return simpleObservable;
  }

  login(params): Observable<any> {

    let user:User = {
      username: 'loremipsum',
      name: 'Lorem Ipsum'
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);

    const simpleObservable = new Observable((observer) => {

      setTimeout(function(){
        observer.next({status: true, user: user});
        observer.complete()
      }, 2000);
      
    })
    return simpleObservable;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    
}




}

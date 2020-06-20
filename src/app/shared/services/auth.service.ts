import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
    const simpleObservable = new Observable((observer) => {
    
      setTimeout(function(){
        observer.next({status: true, username: 'loremipsum', name: 'Lsorem Ipsum'});
        observer.complete()
      }, 2000);
      
    })
    return simpleObservable;
  }



}

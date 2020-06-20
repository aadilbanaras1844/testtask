import { Component } from '@angular/core';
import { AuthService } from './shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'winsoft';
  constructor(
    public authService: AuthService,
    private router: Router,
  ){}

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

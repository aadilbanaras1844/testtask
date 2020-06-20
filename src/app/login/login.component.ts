import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NotificationService, AuthService } from '../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  loading:Boolean = false;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submit(){
    if(this.loginForm.invalid){
      this.notificationService.error('Form status, Invalid');
      return;
    }
    this.loading = true;
    console.log(this.loginForm.value)
    this.authService.login( this.loginForm.value )
    .subscribe(
        data => {
          this.notificationService.success('Cogratulations, Login successfull');
          this.loading = false;
          this.router.navigate(['/profile']);
        },
        error => {
          this.loading = false;
          this.notificationService.error(error)
        });
    
    // alert('form submit clicked')
  }

}
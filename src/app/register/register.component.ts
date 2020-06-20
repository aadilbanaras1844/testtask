import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationService, AuthService } from '../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading:Boolean = false;
  submitted:Boolean = false;
  registerForm = this.fb.group({
    image: ['', [Validators.required]],
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  submit(){

    this.submitted = true;
    if(this.registerForm.invalid){
      this.notificationService.error('Form status, Invalid');
      return;
    }
    this.loading = true;
    console.log('Form values ', this.registerForm.value )
    this.authService.register( this.registerForm.value )
    .subscribe(
        data => {
          this.notificationService.success('Cogratulations, your account created. Login to continue');
          this.loading = false;
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
          this.notificationService.error(error)
        });
    
    
    // alert('form submit clicked')
  }

}

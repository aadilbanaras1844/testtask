import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(
    private toastr: ToastrService,
  ) { }

  success(message){
    this.toastr.success(message, 'Success!');
  }
  error(message){
    this.toastr.error(message, 'Error!');
  }
  warning(heading, message){
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }


}

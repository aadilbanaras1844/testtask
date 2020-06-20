import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services';

@Component({
  selector: 'app-dynamicuser',
  templateUrl: './dynamicuser.component.html',
  styleUrls: ['./dynamicuser.component.scss']
})
export class DynamicuserComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}

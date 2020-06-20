import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from '../shared/services';
import { DynamicuserComponent } from './../dynamicuser/dynamicuser.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private vf:ViewContainerRef,private componentFactoryResolver:ComponentFactoryResolver,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    //This pieces of code adds dynamic component ( Just trust me for now  )
    let resolver = this.componentFactoryResolver.resolveComponentFactory(DynamicuserComponent);
    let componentFactory =   this.vf.createComponent(resolver);
  
  }


}

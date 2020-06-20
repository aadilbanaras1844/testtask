import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guards';
import { DynamicuserComponent } from './dynamicuser/dynamicuser.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'profile',     canActivate: [ AuthGuard ], component: ProfileComponent  },
  { path: 'profile2',     canActivate: [ AuthGuard ], component: DynamicuserComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

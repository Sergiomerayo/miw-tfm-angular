import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginGuard} from "./core/guards/login.guard";
import {HomeGuard} from "./core/guards/home.guard";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [LoginGuard]},
  {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule), canActivate: [HomeGuard]}, // lazy load
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

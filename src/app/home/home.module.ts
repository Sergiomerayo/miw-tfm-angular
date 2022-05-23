import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {EmployeesComponent} from "./employees/employees.component";
import {FooterComponent} from "../shared/footer/footer.component";


@NgModule({
  declarations: [

    HomeComponent,
    EmployeesComponent,
    FooterComponent

  ],
  imports: [
    HomeRoutingModule,
  ],
})
export class HomeModule {

}

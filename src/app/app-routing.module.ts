import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Home

import { loginComponents } from './pages/login/login.components';
import { DriverComponent } from './pages/driver/driver.component';

 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'Drivers', component: DriverComponent,data: { title: 'Gestionar Conductores'} },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes,{ useHash: true } ) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }

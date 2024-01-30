import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Home

import { loginComponents } from './pages/login/login.components';

 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes,{ useHash: true } ) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }

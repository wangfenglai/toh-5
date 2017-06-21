import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LaiLaiComponent } from "./lailai.component";
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import{ Language } from './language.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'lailai',  component:LaiLaiComponent },
  {path:"language",component:Language}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

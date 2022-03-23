import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';


const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', component: HomeComponent
  }

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
    ],
})
export class AppRoutesModule { }

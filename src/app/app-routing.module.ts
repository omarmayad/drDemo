import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from 'src/app/first/first.component';


const routes: Routes = [
  
  { path: 'first', component: FirstComponent },
  { path: '**', component: FirstComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileInicialComponent } from './paginas/mobile/mobile-inicial/mobile-inicial.component';

const routes: Routes = [
  { path: '', component: MobileInicialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

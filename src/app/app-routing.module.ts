import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileInicialComponent } from './pages/mobile/mobile-inicial/mobile-inicial.component';
import { MobileCadastroComponent } from './pages/mobile/mobile-cadastro/mobile-cadastro.component';

const routes: Routes = [
  { path: 'inicial', component: MobileInicialComponent },
  { path: '', component: MobileCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

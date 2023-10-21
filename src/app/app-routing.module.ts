import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileInicialComponent } from './pages/mobile/mobile-inicial/mobile-inicial.component';
import { MobileCadastroComponent } from './pages/mobile/mobile-cadastro/mobile-cadastro.component';
import { MobileHomeComponent } from './pages/mobile/mobile-home/mobile-home.component';
import { MobileLoginComponent } from './pages/mobile/mobile-login/mobile-login.component';
import { MobileMensagemComponent } from './pages/mobile/mobile-mensagem/mobile-mensagem.component';
import { MobilePerfilComponent } from './pages/mobile/mobile-perfil/mobile-perfil.component';

const routes: Routes = [
  { path: 'inicial', component: MobileInicialComponent },
  { path: 'cadastro', component: MobileCadastroComponent },
  { path: 'home', component: MobileHomeComponent },
  { path: 'login', component: MobileLoginComponent },
  { path: 'mensagem', component: MobileMensagemComponent },
  { path: 'perfil', component: MobilePerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileInicialComponent } from './pages/inicial/inicial.component';
import { MobileCadastroComponent } from './pages/cadastro/cadastro.component';
import { MobileHomeComponent } from './pages/home/home.component';
import { MobileLoginComponent } from './pages/login/login.component';
import { MobileMensagemComponent } from './pages/mensagem/mensagem.component';
import { MobilePerfilComponent } from './pages/perfil/perfil.component';
import { PostarComponent } from './pages/postar/postar.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicial', pathMatch: 'full' },
  { path: 'inicial', component: MobileInicialComponent },
  { path: 'cadastro', component: MobileCadastroComponent },
  { path: 'home', component: MobileHomeComponent },
  { path: 'login', component: MobileLoginComponent },
  { path: 'mensagem', component: MobileMensagemComponent },
  { path: 'perfil', component: MobilePerfilComponent },
  { path: 'postar', component: PostarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

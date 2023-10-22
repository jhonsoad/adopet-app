import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileInicialComponent } from './pages/inicial/inicial.component';
import { MobileCadastroComponent } from './pages/cadastro/cadastro.component';
import { MobileHomeComponent } from './pages/home/home.component';
import { MobileLoginComponent } from './pages/login/login.component';
import { MobilePerfilComponent } from './pages/perfil/perfil.component';
import { MobileMensagemComponent } from './pages/mensagem/mensagem.component';
import { HttpClientModule } from '@angular/common/http';
import { PetService } from './services/pet.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MobileInicialComponent,
    MobileCadastroComponent,
    MobileHomeComponent,
    MobileLoginComponent,
    MobilePerfilComponent,
    MobileMensagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

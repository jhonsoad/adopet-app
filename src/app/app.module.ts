import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileInicialComponent } from './pages/mobile/mobile-inicial/mobile-inicial.component';
import { MobileCadastroComponent } from './pages/mobile/mobile-cadastro/mobile-cadastro.component';
import { MobileHomeComponent } from './pages/mobile/mobile-home/mobile-home.component';
import { MobileLoginComponent } from './pages/mobile/mobile-login/mobile-login.component';
import { MobilePerfilComponent } from './pages/mobile/mobile-perfil/mobile-perfil.component';
import { MobileMensagemComponent } from './pages/mobile/mobile-mensagem/mobile-mensagem.component';
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

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
import { PostarComponent } from './pages/postar/postar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api/api.service';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';

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
    PostarComponent,
    HomeAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

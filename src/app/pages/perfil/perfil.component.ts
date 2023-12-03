import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class MobilePerfilComponent implements OnInit {

  loading: boolean = false;
  envioSucesso: boolean = false;
  envioErro: boolean = false;

  formData: any = {

    nomeUsuario: '',
    nomeOng: '',
    cargoUsuario: '',
    telefoneUsuario: '',
    emailUsuario: '',
    cidadeOng: '',
    siteOng: ''

  };

  constructor() { }

  ngOnInit(): void {
  }

  async enviarMensagem() {

    this.loading = true;
    emailjs.init('f6e2HUIcY6eEgUDoK');
    let response = await emailjs.send("service_iutd9j5","template_v8gutde", {

      nomeUsuario: this.formData.nomeUsuario,
      nomeOng: this.formData.nomeOng,
      cargoUsuario: this.formData.cargoUsuario,
      telefoneUsuario: this.formData.telefoneUsuario,
      emailUsuario: this.formData.emailUsuario,
      cidadeOng: this.formData.cidadeOng,
      siteOng: this.formData.siteOng

    });
    setTimeout( () =>{
      console.log('SUCCESS!', response.status, response.text);
      this.loading = false;
      this.envioSucesso = true;
    }, 2000)

	} catch (err: any) { 
    setTimeout(() => {
      console.log('FAILED...', err);
      this.loading = false;
      this.envioErro = true
    }, 2000);
  }

}

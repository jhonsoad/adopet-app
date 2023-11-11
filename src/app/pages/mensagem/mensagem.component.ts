import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MobileMensagemComponent implements OnInit {

  loading: boolean = false;
  formData: any = {

    nomeUsuario: '',
    to_name: 'Adopet',
    telefoneUsuario: '',
    petName: '',
    mensagem: ''

  };

  constructor() { }

  ngOnInit(): void {
  }

  async enviarMensagem() {

    this.loading = true;
    emailjs.init('f6e2HUIcY6eEgUDoK');
    let response = await emailjs.send("service_iutd9j5","template_v8gutde", {

      nomeUsuario: this.formData.nomeUsuario,
      to_name: "Adopet",
      telefoneUsuario: this.formData.telefoneUsuario,
      petName: this.formData.petName,
      mensagem: this.formData.mensagem,

    });
    setTimeout( () =>{
      console.log('SUCCESS!', response.status, response.text);
      this.loading = false;
    }, 2000)

	} catch (err: any) { 
    setTimeout(() => {
      console.log('FAILED...', err);
      this.loading = false;
    }, 2000);
  }

  // emailjs.send('<YOUR_SERVICE_ID>','<YOUR_TEMPLATE_ID>', templateParams, '<YOUR_PUBLIC_KEY>')
	// .then((response) => {
	//    console.log('SUCCESS!', response.status, response.text);
	// }, (err) => {
	//    console.log('FAILED...', err);
	// });

}

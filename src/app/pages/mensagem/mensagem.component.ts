import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MobileMensagemComponent implements OnInit {

  formData: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensagem() {
    alert(this.formData);
    console.log(this.formData);
  }

}

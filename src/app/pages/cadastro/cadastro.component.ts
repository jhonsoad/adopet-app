import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { ApiService } from 'src/app/services/api/api.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class MobileCadastroComponent implements OnInit {

  formData: Usuario = {
    // id: 2,
    email: '',
    nomeUsuario: '',
    senhaUsuario: '',
    telefoneUsuario: '13997622957'
  };
  confirmaSenha: string = '';
  loading: boolean = false;

  constructor(private utilsService: UtilsService, private apiService: ApiService) {}

  ngOnInit(): void {
    // this.changeBackgroundColor()
  }

  // changeBackgroundColorAndPosition() {
  //   this.utilsService.setBackgroundColor('white');
  // }

  validarSenha() {
    if (this.formData.senhaUsuario === this.confirmaSenha) {
      this.cadastrarUsuario();
    } else {
      alert('Senhas não conferem!');
    }
  
  }

  cadastrarUsuario() {
    this.loading = true;
    this.apiService.criarConta(this.formData).subscribe({
      next: (response) => {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.log('Conta criada com sucesso!', response);
      },
      error: (error) => {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.error('Erro ao criar a conta:', error);
      }
  });
  }

}

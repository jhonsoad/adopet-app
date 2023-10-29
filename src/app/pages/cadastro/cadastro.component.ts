import { Component, OnInit, ViewChild } from '@angular/core';
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
    email: '',
    nomeUsuario: '',
    senhaUsuario: '',
  };
  confirmaSenha: string = '';

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
    console.log(this.formData)
    this.apiService.criarConta(this.formData).subscribe(
      (response) => {
        // Tratar a resposta da criação da conta (pode redirecionar o usuário, exibir uma mensagem, etc.)
        console.log('Conta criada com sucesso!', response);
      },
      (error) => {
        // Tratar erros (exibir mensagens de erro, etc.)
        console.error('Erro ao criar a conta:', error);
      }
    );
  }

}

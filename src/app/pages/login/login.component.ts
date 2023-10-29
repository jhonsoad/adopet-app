import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class MobileLoginComponent implements OnInit {

  userId:number = 4;
  formData: Usuario = {
    email: '',
    senhaUsuario: ''
  }

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  logar() {
    this.apiService.consultarConta(this.userId).subscribe({
      next: (res: Usuario) => {
        // Tratar a resposta da criação da conta (pode redirecionar o usuário, exibir uma mensagem, etc.)
        console.log('Conta criada com sucesso!', res);
      },
      error: (error) => {
        // Tratar erros (exibir mensagens de erro, etc.)
        console.error('Erro ao criar a conta:', error);
      }
    });
  }

}

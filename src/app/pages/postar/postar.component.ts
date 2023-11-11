import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interface/pet';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.scss']
})
export class PostarComponent implements OnInit {

  idadeNumero: number = 0;
  idadeTexto: string = '';
  
    formData: Pet = {
  
      imageName: '',
      comentario: '',
      nomePet: '',
      idadePet: this.idadeNumero + this.idadeTexto,
      tamanhoPet: '',
      cidadePet: '',
  
      usuarioLogin: {
  
          idUsuario: 0
  
      }
  
    };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  criarPost() {
    this.apiService.criarPost(this.formData).subscribe({
      next: (response) => {
        // Tratar a resposta da criação da conta (pode redirecionar o usuário, exibir uma mensagem, etc.)
        console.log('Conta criada com sucesso!', response);
      },
      error: (error) => {
        // Tratar erros (exibir mensagens de erro, etc.)
        console.error('Erro ao criar a conta:', error);
      }
  });
  }

}

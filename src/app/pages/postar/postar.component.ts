import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interface/pet';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.scss']
})
export class PostarComponent implements OnInit {

  loading: boolean = false;
  
  formData: Pet = {

    imageName: '',
    comentario: '',
    nomePet: '',
    idadePet: '',
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
    this.loading = true;
    this.apiService.criarPost(this.formData).subscribe({
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

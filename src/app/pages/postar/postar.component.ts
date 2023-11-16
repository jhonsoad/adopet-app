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
  imageSelected: File | undefined;
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

  onFileSelected(event: any) {
    this.imageSelected = event.target.files[0]; // Captura o arquivo selecionado
    if (this.imageSelected) {
      this.formData.imageName = this.imageSelected.name; // Define o nome do arquivo no formData
    }
  }  

  criarPost() {
    this.loading = true;
    if (this.imageSelected) {
      const formData = new FormData();
      formData.append('file', this.imageSelected);
      formData.append('nomePet', this.formData.nomePet);
      formData.append('idadePet', this.formData.idadePet);
      formData.append('tamanhoPet', this.formData.tamanhoPet);
      formData.append('cidadePet', this.formData.cidadePet);
      formData.append('imageName', this.formData.imageName);

      console.log('FormData: ',formData);
      this.apiService.criarPost(formData).subscribe({
        next: (response) => {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          console.log('Post criado com sucesso!', response);
        },
        error: (error) => {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          console.error('Erro ao criar o post:', error);
        }
      });
    } else {
      console.error('Nenhuma imagem selecionada');
      this.loading = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    image: null,
    comment: '',
    petName: '',
    idadePet: '',
    tamanhoPet: '',
    cidadePet: '',
    userId: 1,

    usuarioLogin: {
      idUsuario: 0
    }

  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    ) { }

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
      formData.append('image', this.imageSelected);
      formData.append('petName', this.formData.petName);
      formData.append('idadePet', this.formData.idadePet);
      formData.append('tamanhoPet', this.formData.tamanhoPet);
      formData.append('cidadePet', this.formData.cidadePet);
      formData.append('imageName', this.formData.imageName);
      formData.append('comment', this.formData.comment);
      formData.append('userId', this.formData.userId.toString());

      console.log('FormData: ',formData);
      this.apiService.criarPost(formData).subscribe({
        next: (response) => {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          this.router.navigate(['/admin']);
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

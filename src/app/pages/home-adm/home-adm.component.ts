import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.scss']
})
export class HomeAdmComponent implements OnInit {

  listPets: Post[] = [];
  errorMessage: string = '';
  loading: boolean = true;
  petImages: { [key: string]: Observable<SafeUrl> } = {};

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    this.listarPets();
  }

  listarPets() {
    this.loading = true;
    this.apiService.listarPosts().subscribe({
      next: (listPets: Post[]) => {
        this.listPets = listPets;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
      error: error => {
        this.errorMessage = error;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.log('erro: ', this.errorMessage);
      }
    })
  }

  getPetImage(imageName: string): Observable<SafeUrl> {
    if(!this.petImages[imageName]) {
      this.petImages[imageName] = this.apiService.retornarImagem(imageName).pipe(
        map((blob: Blob) => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob)))
      );
    }
    return this.petImages[imageName];
  }

  excluir(id: number, pet: any, type: string) {
    this.closeModal(pet, type);
    this.apiService.deletePost(id).subscribe({
      next: (res) => {
        console.log('res: ', res)
        this.listarPets();        
      },
      error: error => {
        if (typeof error === 'object' && error.status === 200) {
          this.listarPets();
        }
        this.errorMessage = error;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.log('erro: ', this.errorMessage);
        console.log('Status: ', error.status);
      }
    })
  }

  openModal(pet:any, type: string): void {
    if(type === 'ModalContato') {
      pet.showModal = true;
      return;
    }
    if(type === 'ModalExcluir') {
      pet.showDeleteModal = true;
      return;
    }
  }

  closeModal(pet: any, type: string): void {
    if(type === 'ModalContato') {
      pet.showModal = false;
      return;
    }
    if(type === 'ModalExcluir') {
      pet.showDeleteModal = false;
      return;
    }
  }

}

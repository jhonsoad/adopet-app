import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  variableValue: string = '';
  loading: boolean = true;
  petImages: { [key: string]: Observable<SafeUrl> } = {};

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.listarPets();
  }

  listarPets() {
    this.loading = true;
    this.apiService.listarPosts().subscribe({
      next: (listPets: Post[]) => {
        this.listPets = listPets;
        this.variableValue = this.apiService.variableValue;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        this.router.navigate(['/admin'])
      },
      error: error => {
        this.errorMessage = error;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.log('erro: ', this.errorMessage);
        this.router.navigate(['/admin'])
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

  excluir(id: number) {
    this.loading = true;
    this.apiService.deletePost(id).subscribe({
      next: (res) => {
        this.variableValue = this.apiService.variableValue;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.log('res: ', res)
        this.router.navigate(['/admin'])
        this.listarPets();
      },
      error: error => {
        this.errorMessage = error;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.log('erro: ', this.errorMessage);
        this.router.navigate(['/admin'])
      }
    })
  }

  openModal(pet:any): void {
    pet.showModal = true;
  }

  closeModal(pet: any): void {
    pet.showModal = false;
  }

}

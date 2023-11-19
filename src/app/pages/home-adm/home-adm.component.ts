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
  variableValue: string = '';
  loading: boolean = true;
  showTooltip: boolean = false;
  petImages: { [key: string]: Observable<SafeUrl> } = {};

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.listarPets();
    console.log('listPets: ', this.listPets);
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

  excluir(id: number) {
    this.loading = true;
    this.apiService.deletePost(id).subscribe({
      next: (res) => {
        this.variableValue = this.apiService.variableValue;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.log('res: ', res)
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

  toggleTooltip() {
    console.log('showTooltip: ', this.showTooltip);
    this.showTooltip = !this.showTooltip;
  }

  closeTooltip() {
    this.showTooltip = false;
  }

}

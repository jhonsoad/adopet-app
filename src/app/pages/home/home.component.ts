// import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class MobileHomeComponent implements OnInit {

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

  toggleTooltip() {
    console.log('showTooltip: ', this.showTooltip);
    this.showTooltip = !this.showTooltip;
  }

  closeTooltip() {
    this.showTooltip = false;
  }

}






  // getPetImageUrl(imageName: string): Observable<Blob>  {
    // const imageUrl = this.variableValue + 'publi/images/' + imageName;
    // const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
    // const urlWithHeaders = imageUrl + '?' + headers.keys().map(key => `${key}=${headers.get(key)}`).join('&');
    // return this.apiService.retornarImagem(imageName);
  // }


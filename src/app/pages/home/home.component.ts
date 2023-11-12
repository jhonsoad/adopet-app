import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private apiService: ApiService,
    private roter: Router
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

  irParaMensagem() {
    this.roter.navigate(['/mensagem']);
  }

  getPetImageUrl(imageName: string): string {
    const imageUrl = this.variableValue + 'publi/images/' + imageName;
    const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
    return imageUrl + '?' + headers.keys().map(key => `${key}=${headers.get(key)}`).join('&');
  }
  
}

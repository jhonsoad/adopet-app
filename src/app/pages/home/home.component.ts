import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.listarPets();
    console.log('listPets: ', this.listPets);
  }

  listarPets() {
    this.apiService.listarPosts().subscribe(
      (listPets) => {
        this.listPets = listPets;
    },
    error => {
      this.errorMessage = error;
      console.log('erro: ', this.errorMessage);
    }
    )
  }

}

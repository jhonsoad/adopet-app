import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interface/pet';
import { PetService } from 'src/app/services/pet/pet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class MobileHomeComponent implements OnInit {

  listPets: Pet[] = [];
  errorMessage: string = '';

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.listar().subscribe(
      (listPets) => {
        this.listPets = listPets;
    },
    error => {
      this.errorMessage = error;
    }
    )
  }

}

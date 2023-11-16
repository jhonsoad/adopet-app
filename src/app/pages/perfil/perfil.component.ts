import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class MobilePerfilComponent implements OnInit {

  loading: boolean = false;

  formData: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  alterarCadastro(){
    this.loading = true;
    alert("Alterar cadastro");
  
  }

}

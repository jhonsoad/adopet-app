import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mobile-inicial',
  templateUrl: './mobile-inicial.component.html',
  styleUrls: ['./mobile-inicial.component.scss']
})
export class MobileInicialComponent implements OnInit {

  constructor(
    private roter: Router,
    ) { }

  ngOnInit(): void {
   
  }

  cadastrar() {
    this.roter.navigate(['/cadastro'])
  }

  logar() {
    this.roter.navigate(['/login'])
  }

}

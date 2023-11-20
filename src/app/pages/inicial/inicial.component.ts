import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class MobileInicialComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
   
  }

  adotar() {
    this.router.navigate(['/home'])
  }

  logar() {
    this.router.navigate(['/login'])
  }

}

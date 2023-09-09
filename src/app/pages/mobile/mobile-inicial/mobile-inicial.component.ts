import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-mobile-inicial',
  templateUrl: './mobile-inicial.component.html',
  styleUrls: ['./mobile-inicial.component.scss']
})
export class MobileInicialComponent implements OnInit {

  constructor(
    private roterador: Router,
    private utilsService: UtilsService
    ) { }

  ngOnInit(): void {
    this.changeBackgroundColor()
  }

  changeBackgroundColor() {
    this.utilsService.setBackgroundColor('#3772FF');
  }

  cadastrar() {
    this.roterador.navigate(['/cadastro'])
  }

  logar() {
    console.log('logar')
  }

}

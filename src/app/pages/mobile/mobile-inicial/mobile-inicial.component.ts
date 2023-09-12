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
    this.changeBackgroundColorAndPosition()
  }

  changeBackgroundColorAndPosition() {
    this.utilsService.setBackgroundColorAndPosition('#3772FF', 'top left,right');
  }

  cadastrar() {
    this.roterador.navigate(['/cadastro'])
  }

  logar() {
    console.log('logar')
  }

}

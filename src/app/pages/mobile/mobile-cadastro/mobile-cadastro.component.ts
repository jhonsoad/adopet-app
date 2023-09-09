import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-mobile-cadastro',
  templateUrl: './mobile-cadastro.component.html',
  styleUrls: ['./mobile-cadastro.component.scss']
})
export class MobileCadastroComponent implements OnInit {

  // @ViewChild('')

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.changeBackgroundColor()
  }

  changeBackgroundColor() {
    this.utilsService.setBackgroundColor('white');
  }

}

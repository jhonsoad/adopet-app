import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class MobileCadastroComponent implements OnInit {

  // @ViewChild('')

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    // this.changeBackgroundColor()
  }

  // changeBackgroundColorAndPosition() {
  //   this.utilsService.setBackgroundColor('white');
  // }

}

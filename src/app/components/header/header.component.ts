import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('contentDiv') elementoDiv!:ElementRef;
  perfil: boolean = false;

  imagePerfil$ = this.utilsService.imagePerfil$;

  constructor(
    private router: Router,
    private utilsService: UtilsService
  ) {

    this.imagePerfil$.subscribe((condition) => {
      this.updateImagePerfil(condition);
    })

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/home') || event.url.includes('/mensagem') || event.url.includes('/perfil')) {
          this.utilsService.setImagePerfil(true);
        } else {
          this.utilsService.setImagePerfil(false);
        }
      }
    });

  }

  private updateImagePerfil(condition: boolean) {
    setTimeout(() => {
      this.perfil = condition; 
    }, 0);
  }

  goHome() {
    this.router.navigate(['/inicial'])
  }

  goMessage() {
    this.router.navigate(['/mensagem'])
  }

  goPerfil() {
    this.router.navigate(['/perfil'])
  }

}

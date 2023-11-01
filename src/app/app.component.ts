import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilsService } from './services/utils/utils.service';
import { Router, NavigationEnd  } from '@angular/router';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('contentMain') elementoMain!:ElementRef;
  @ViewChild('contentDiv') elementoDiv!:ElementRef;

  title = 'adopet-app';
  randonValue: string = '';
  backgroundColor$ = this.utilsService.backgroundColor$;
  backgroundPaws$ = this.utilsService.backgroundPaws$;
  // backgroundPerfil$ = this.utilsService.backgroundPerfil$;

  constructor(
    private utilsService: UtilsService,
    private router: Router,
    private apiService: ApiService
    ) {
      
    this.updateBackgroundColor('#3772FF');

    this.backgroundColor$.subscribe((color) => {
      this.updateBackgroundColor(color);
    });

    this.backgroundPaws$.subscribe((paws) => {
      this.updateBackgroundImage(paws);
    })

    // this.backgroundPerfil$.subscribe((perfil) => {
    //   this.updateBackgroundImagePerfil(perfil);
    // })

    setTimeout(() => {
        if (this.router.url === '/inicial' || this.router.url === '/') {
          this.utilsService.setBackgroundColor('#3772FF');
        } else {
          this.utilsService.setBackgroundColor('white');
        }
      },100);

    
  
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/inicial')) {
          this.utilsService.setBackgroundColor('#3772FF');
        } else {
          this.utilsService.setBackgroundColor('white');
        }
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/cadastro') || event.url.includes('/login')) {
          this.utilsService.setBackgroundPaws('url(../assets/Patas.svg)');
        } else {
          this.utilsService.setBackgroundPaws('url()');
        }
      }
    });

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     if (event.url.includes('/home') || event.url.includes('/mensagem') || event.url.includes('/perfil')) {
    //       this.utilsService.setBackgroundPerfil('url(../assets/Usuário.svg)');
    //     } else {
    //       this.utilsService.setBackgroundPerfil('url()');
    //     }
    //   }
    // });
    console.log(this.backgroundColor$)

  }  

  onRandonValueChange() {
    this.apiService.randonValue = this.randonValue;
  }


  private updateBackgroundColor(color: string) {
    setTimeout(() => {
      const container = this.elementoMain.nativeElement as HTMLElement
      if (container) {
        container.style.backgroundColor = color;
      }
    }, 0);
  }

  private updateBackgroundImage(paws: string) {
    setTimeout(() => {
      const container = this.elementoDiv.nativeElement as HTMLElement
      if (container) {
        container.style.backgroundImage = paws;
      }
    }, 0);
  }

  // private updateBackgroundImagePerfil(perfil: string) {
  //   setTimeout(() => {
  //     const container = this.elementoDiv.nativeElement as HTMLElement
  //     if (container) {
  //       container.style.backgroundImage = perfil;
  //     }
  //   }, 0);
  // }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UtilsService } from './services/utils.service';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('contentApp') elemento!:ElementRef;

  title = 'adopet-app';
  backgroundColor$ = this.utilsService.backgroundColor$;
  backgroundPosition$ = this.utilsService.backgroundPosition$;

  constructor(
    private utilsService: UtilsService,
    private router: Router
    ) {}

  ngAfterViewInit() {
    this.backgroundColor$.subscribe((color) => {
      this.updateBackgroundColor(color);
    })

    this.backgroundPosition$.subscribe((position) => {
      this.updateBackgroundPosition(position);
    })
  

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/inicial')) {
          this.utilsService.setBackgroundColorAndPosition('#3772FF', "'top left''right'");
        } else {
          this.utilsService.setBackgroundColorAndPosition('white', '"top left","left"');
        }
      }
    });
  }  


  private updateBackgroundColor(color: string) {
    setTimeout(() => {
      const container = this.elemento.nativeElement as HTMLElement
      if (container) {
        container.style.backgroundColor = color;
      }
    }, 0);
  }

  private updateBackgroundPosition(position: string) {
    setTimeout(() => {
      const container = this.elemento.nativeElement as HTMLElement as HTMLElement
      if (container) {
        container.style.backgroundPosition = position;
      }
    }, 0);
  }
}

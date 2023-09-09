import { AfterViewInit, Component } from '@angular/core';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'adopet-app';
  backgroundColor$ = this.utilsService.backgroundColor$;

  constructor(private utilsService: UtilsService) {}

  ngAfterViewInit() {
    this.backgroundColor$.subscribe((color) => {
      this.updateBackgroundColor(color);
    })
  }

  private updateBackgroundColor(color: string) {
    setTimeout(() => {
      const container = document.querySelector('div[style.background-color]') as HTMLElement
      if (container) {
        container.style.backgroundColor = color;
      }
    }, 0);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private backgroundColorSubject = new BehaviorSubject<string>('white');
  backgroundColor$ = this.backgroundColorSubject.asObservable();

  constructor() { }

  setBackgroundColor(color: string) {
    this.backgroundColorSubject.next(color);
  }
}

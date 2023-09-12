import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private backgroundColorSubject = new BehaviorSubject<string>('white');
  backgroundColor$ = this.backgroundColorSubject.asObservable();

  private backgroundPositionSubject = new BehaviorSubject<string>('top left,left')
  backgroundPosition$ = this.backgroundPositionSubject.asObservable();

  constructor() { }

  setBackgroundColorAndPosition(color: string, position: string) {
    this.backgroundColorSubject.next(color);
  }
}

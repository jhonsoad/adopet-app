import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private backgroundColorSubject = new BehaviorSubject<string>('#3772FF');
  backgroundColor$ = this.backgroundColorSubject.asObservable();

  private backgroundPawsSubject = new BehaviorSubject<string>('none');
  backgroundPaws$ = this.backgroundPawsSubject.asObservable();

  private imagePerfilSubject = new BehaviorSubject<boolean>(false);
  imagePerfil$ = this.imagePerfilSubject.asObservable();

  constructor() { }

  setBackgroundColor(color: string) {
    this.backgroundColorSubject.next(color);
  }

  setBackgroundPaws(paws: string) {
    this.backgroundPawsSubject.next(paws);
  
  }
  setImagePerfil(condition: boolean) {
    this.imagePerfilSubject.next(condition);
  }
}

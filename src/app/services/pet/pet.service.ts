import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'
import { Pet } from '../../interface/pet';


@Injectable({
  providedIn: 'root'
})
export class PetService {

randonValue: string = '';
private ngrokSkipBrowserWarningHeaders: HttpHeaders;

get API(): string {
  return `https://${this.randonValue}-86-5.ngrok-free.app/account/1`;
}

constructor(private http: HttpClient) {
  this.ngrokSkipBrowserWarningHeaders = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
}

  private addNgrokSkipBrowserWarningHeader(headers?: HttpHeaders): HttpHeaders {
    if (!headers) {
      headers = new HttpHeaders();
    }
    return headers.set('ngrok-skip-browser-warning', 'true');
  }

  listar(): Observable<Pet[]> {
    console.log(this.randonValue)
    console.log(this.API)
    const headers = this.addNgrokSkipBrowserWarningHeader(this.ngrokSkipBrowserWarningHeaders);
    return this.http.get<any>(this.API, {headers}).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Erro do lado do cliente:', error.error.message);

    } else {
      console.error(`Erro do lado do servidor (Código: ${error.status}): ${error.error}`);
    }
    // Retorna um Observable com uma mensagem de erro para o componente
    return throwError('Ocorreu um erro. Tente novamente mais tarde.');
  }
}

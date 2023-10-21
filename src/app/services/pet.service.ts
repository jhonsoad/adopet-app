import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'
import { Pet } from '../interface/pet';


@Injectable({
  providedIn: 'root'
})
export class PetService {

private readonly API = 'http://localhost:3000/data';

constructor(private http: HttpClient) { }

  listar(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.API).pipe(
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

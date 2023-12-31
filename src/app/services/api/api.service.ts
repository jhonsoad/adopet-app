import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Pet } from '../../interface/pet';
import { Observable } from 'rxjs';
import { Usuario } from '../../interface/usuario';
import { Post } from '../../interface/post';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  variableValue: string = '';
  apiMock: string = 'http://localhost:3000/data'

get API(): string {
  return this.variableValue;
}

constructor(private http: HttpClient) { }

  // Criar uma conta de usuário
  criarConta(data: Usuario): Observable<any> {
    const url = `${this.API}account/create`;
    console.log(url);
    return this.http.post<any>(url, data);
  }

  // Consultar informações de um usuário
  consultarConta(userId: number): Observable<Usuario> {
    const url = `${this.API}account/${userId}`;
    return this.http.get<Usuario>(url);
  }
  
  // Criar um post
  criarPost(data: FormData): Observable<any> {
    const url = `${this.API}publi/createPost`;
    return this.http.post(url, data);
  }
  
  // Listar posts
  listarPosts(): Observable<Post[]> {
    const url = `${this.API}publi/all`;
    return this.http.get<Post[]>(url);
  }
  
  // Logar
  logar(data: Usuario): Observable<Usuario> {
    const url = `${this.API}login`;
    return this.http.post<Usuario>(url, data);
  }
  
  //Retornar imagem
  retornarImagem(imageName: string): Observable<Blob> {
    const url = `${this.API}publi/images/${imageName}`;
    return this.http.get(url, { responseType: 'blob' });
  }
  
  //Excluir um post
  deletePost(id: number): Observable<any> {
    const url = `${this.API}publi/delete/${id}`;
    return this.http.delete(url);
  }
}
  // Excluir conta de usuário
  // deleteConta(id: number): Observable<Usuario> {
  //   const url = `${this.API}account/delete/${id}`;
  //   return this.http.delete<Usuario>(url);
  // }
  // Listar um post
  // listarPost(id: number): Observable<Post> {
  //   const url = `${this.API}publi/${id}`;
  //   return this.http.get<Post>(url);
  // }


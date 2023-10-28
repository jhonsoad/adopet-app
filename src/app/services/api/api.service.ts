import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../../interface/pet';
import { Observable } from 'rxjs';
import { Usuario } from '../../interface/usuario';
import { Post } from '../../interface/post';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  randonValue: string = '';

get API(): string {
  return `https://${this.randonValue}-86-5.ngrok-free.app/`;
}

constructor(private http: HttpClient) { }

  // Criar uma conta de usuário
  criarConta(data: any): Observable<Usuario> {
    const url = `${this.API}account/create`;
    return this.http.post<Usuario>(url, data);
  }

  // Consultar informações de um usuárioS
  consultarConta(userId: number): Observable<Usuario> {
    const url = `${this.API}account/${userId}`;
    return this.http.get<Usuario>(url);
  }

  // Excluir conta de usuário
  deleteConta(id: number): Observable<Usuario> {
    const url = `${this.API}account/delete/${id}`;
    return this.http.delete<Usuario>(url);
  }

  // Criar um post
  criarPost(data: any): Observable<Pet> {
    const url = `${this.API}publi/createPost`;
    return this.http.post<Pet>(url, data);
  }

  // Retornar imagem
  retornarImagem(imageName: string): Observable<any> {
    const url = `${this.API}publi/images/${imageName}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  // Excluir um post
  deletePost(id: number): Observable<Pet> {
    const url = `${this.API}account/delete/${id}`;
    return this.http.delete<Pet>(url);
  }

  // Listar posts
  listarPosts(): Observable<Post[]> {
    const url = `${this.API}publi/all`;
    return this.http.get<Post[]>(url);
  }

  // Listar um post
  listarPost(id: number): Observable<Post> {
    const url = `${this.API}publi/${id}`;
    return this.http.get<Post>(url);
  }

}

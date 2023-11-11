import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class MobileLoginComponent implements OnInit {

  loading: boolean = false;
  userId:number = 4;
  formData: Usuario = {
    email: '',
    senhaUsuario: ''
  }

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  logar() {
    this.loading = true;
    this.apiService.logar(this.formData).subscribe({
      next: (res: Usuario) => {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.log('Conta logadacom sucesso!', res);
      },
      error: (error) => {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.error('Erro ao logar na conta:', error);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/usuario';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class MobileLoginComponent implements OnInit {

  loading: boolean = false;
  userId:number = 1;
  loginError: string = '';
  formData: Usuario = {
    email: '',
    senha: ''
  }

  constructor(
    private apiService:ApiService,
    private router: Router
    ) { }

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
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        console.error('Erro ao logar na conta:', error);
        this.loginError = 'Email ou senha incorretos. Por favor, tente novamente.';
      }
    });
  }

}

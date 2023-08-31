import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoLanguage } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {

  description = 'Aqui você tem como visualizar seus vencimentos, emitir boletos e solicitar reembolso.';
  logo: string = '../assets/images/logo_login.png';
  background: string = '../assets/images/login/loginBg.jpg';
  loading: boolean = false;
  languages: Array<PoLanguage> = [];
  literals: PoPageLoginLiterals = {
    loginHint: 'Insira seu e-mail ou usuário',
    registerUrl: 'Novo cadastro'
  };

  user: string = '';
  users: any[] = [];
  constructor(
    private authservice: AuthService,
    private loginService: LoginService
  ) {}

  goToLogin(event) {
    this.validateLogin(event);
  }

  validateLogin(form) {
    this.loading = true;
    const dados = { login: form.login.toUpperCase(), password: form.password };
    this.loginService.validateLogin(dados).subscribe({
      next: (data: any) => {
        this.loading = false;
        if(data.code == 400) {
          this.authservice.checkLogin(false, dados);
        } else {
          if(data.authorized == true) {
            this.authservice.checkLogin(true, dados);
          }
        }
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }



}

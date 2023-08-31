import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../util/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostraMenuEmitter = new EventEmitter<boolean>();
  usuarioLogadoEmitter = new EventEmitter();

  usuarioAutenticado: boolean = false;

  constructor(private router: Router, private notificationService: NotificationService) { }

  checkLogin(valid, user){
    if(valid) {
      this.mostraMenuEmitter.emit(true);
      this.usuarioLogadoEmitter.emit(user);
      this.router.navigate(['home'], { state: { usuarioLogado: user } });
    } else {
      this.mostraMenuEmitter.emit(false);
      this.notificationService.warning('Usuário não autorizado!');
    }
  }

}

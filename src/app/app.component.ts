import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './login/auth.service';
import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { AuthGuard } from './core/auth/auth.guard';
import { PoMenuItem, PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  readonly srcLogo = 'assets/images/totvs-logo.svg';
  mostraMenu: boolean = false;
  menuItemSelected: string;
  usuarioLogado: any;
  profile = { title: 'Nicole Duarte Luna', subtitle: 'nicole.dluna@totvs.com.br'}

  menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.updateMenu.bind(this),
      icon: 'po-icon po-icon-home',
      shortLabel: 'Home',
      link: '/home'
    },
    {
      label: 'Boleto',
      action: this.updateMenu.bind(this),
      icon: 'po-icon po-icon-sale',
      shortLabel: 'Boleto'
    },
    {
      label: 'Reembolso',
      action: this.updateMenu.bind(this),
      icon: 'po-icon po-icon-bar-code',
      shortLabel: 'Reembolso'
    }
  ];

  profileActions = [
    {
      icon: 'po-icon-exit',
      label: 'Sair',
      type: 'danger',
      separator: true,
      action: () => this.openModalExit()
    }
  ];

  @ViewChild('modalExit') modalExit: PoModalComponent;

  primaryAction: PoModalAction = {
    action: () => {
      this.redirectLogin();
      this.modalExit.close();
      this.mostraMenu = false;
    },
    label: 'Confirmar'
  };

  constructor( private authService: AuthService,
    private authGuard: AuthGuard,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(){
    this.authGuard.mostraMenuEmit.subscribe(mostra => {
      this.mostraMenu = mostra
    });
  }

  ngAfterViewChecked(): void {
    const rotaAtiva = this.activatedRoute.snapshot.children[0].routeConfig.path;
    if (rotaAtiva == 'login' ) {
      this.mostraMenu = false;
    } else if (rotaAtiva == 'novo-cadastro'){
      this.mostraMenu = true;
    }
  }

  updateMenu(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
    this.router.navigate([menu.link], { state: { menu: this.menuItemSelected, usuario: this.usuarioLogado } })
  }

  openModalExit() {
    this.modalExit.open();
  }

  redirectLogin() {
    this.router.navigate(['/']);
  }

}

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  PoMenuItem,
  PoSelectOption,
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { NotificationService } from 'src/app/util/notification.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor() {}

}

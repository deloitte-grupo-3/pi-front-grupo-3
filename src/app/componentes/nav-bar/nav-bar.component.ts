import * as Feather from 'feather-icons';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LoginFormComponent} from '../login-form/login-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild(LoginFormComponent, {static: true})
  filho!: LoginFormComponent;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    Feather.replace();
  }

}

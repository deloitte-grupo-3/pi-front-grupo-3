import * as Feather from 'feather-icons';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  @ViewChild(LoginFormComponent, { static: true })
  filho!: LoginFormComponent;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    Feather.replace();
  }

  buscar(form: any){
    this.router.navigate(["/busca"], {queryParams: {q: form.value.q}});
  }

}

import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  isClickForgotPassword = false;
  languages: any[] = [
    {id: Language.Tr, img:'assets/img/tr.svg'},
    {id: Language.En, img:'assets/img/en.svg'}];
    selectedLan: any
  constructor() { 
    this.selectedLan = this.languages[0].id;
  }

  ngOnInit(): void {
  }

  changeForgotPasswordStatus() {
    return this.isClickForgotPassword = !this.isClickForgotPassword;
  }

  reset() {
    this.isClickForgotPassword = false;
  }
}

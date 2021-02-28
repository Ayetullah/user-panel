import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    {id: Language.Tr, img:'assets/img/tr.svg', value: 'Tr'},
    {id: Language.En, img:'assets/img/en.svg', value: 'En'}];
    selectedLan: any
  constructor(private _router: Router) { 
    this.selectedLan = this.languages[0].value;
  }

  ngOnInit(): void {
  }

  changeForgotPasswordStatus() {
    return this.isClickForgotPassword = !this.isClickForgotPassword;
  }

  login() {
    this._router.navigate(['/application'])
  }

  reset() {
    this.isClickForgotPassword = false;
  }

  changeLanguage(lan: any) {
    this.selectedLan = lan.value;
    localStorage.setItem('lan', lan.id);
  }
}

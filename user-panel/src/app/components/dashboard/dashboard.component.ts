import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSidebarNarrow = localStorage.getItem('isSidebarNarrow') == 'true';
  languages: any[] = [
    {id: Language.Tr, img:'assets/img/tr.svg', value: 'Tr'},
    {id: Language.En, img:'assets/img/en.svg', value: 'En'}];
    selectedLan: any

  constructor() {
    this.selectedLan = this.languages.find(x => x.id == localStorage.getItem('id'))?.value ?? 'Tr'
   }

  ngOnInit(): void {
  }

  setSidebarWidth() {
    this.isSidebarNarrow = !this.isSidebarNarrow;
    localStorage.setItem('isSidebarNarrow', String(this.isSidebarNarrow));
  }
  
  changeLanguage(lan: any) {
    this.selectedLan = lan.value;
    localStorage.setItem('lan', lan.id);
  }
}

import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-panel';
  isShowDashboard = true;

  constructor(private _router: Router) {
    this._router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(event['url'] == '/login') {
          this.isShowDashboard = false;
        } else {
          this.isShowDashboard = true;
        }
      }
    })
  }
}

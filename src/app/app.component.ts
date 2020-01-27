import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calls-app';

  constructor(private router: Router) {

  }

  createCall() {
    this.router.navigate(['/calls/create']);
  }

  viewCalls() {
    this.router.navigate(['/calls/view']);
  }

  viewStats() {
    this.router.navigate(['/calls/stats']);
  }
}

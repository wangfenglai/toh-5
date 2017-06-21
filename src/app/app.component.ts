import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div style="text-align:center">
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/lailai" routerLinkActive="active">LaiLai</a>
      <a routerLink="/language" routerLinkActive="active">Language</a>
    </nav>
      </div>
    <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}

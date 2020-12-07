import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tuto';
  public pname = 'Coded spartant';
  public mes: string;
  public dif: string;
}

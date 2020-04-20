import { Component } from '@angular/core';

@Component({
  selector: 'ang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string = 'Angadh';

  pageTitle: string = "Angular: Getting Started";
}

import { Component } from '@angular/core';

@Component({
  selector: 'dods-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };
  title = 'dods works!';
}

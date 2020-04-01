import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuLoaded = 'events';

  Navigate(Selected: string) {
    this.menuLoaded = Selected;
  }
}

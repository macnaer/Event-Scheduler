import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() Selected = new EventEmitter<string>();
  onSelect(data: string) {
    this.Selected.emit(data);
  }
  constructor() {}

  ngOnInit(): void {}
}

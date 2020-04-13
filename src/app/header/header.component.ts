import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}
  onSaveData() {
    this.storageService.storeEvents();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event.model';
0;
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event;
  constructor() {}

  ngOnInit(): void {}
}

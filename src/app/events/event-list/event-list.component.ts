import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Output() eventSelected = new EventEmitter<Event>();

  events: Event[];
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
  onEventSelected(event: Event) {
    this.eventSelected.emit(event);
  }
}

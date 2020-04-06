import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  selectedEvent: Event;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.eventSelected.subscribe((event: Event) => {
      this.selectedEvent = event;
    });
  }
}

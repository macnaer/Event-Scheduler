import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
0;
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {}
  onAddReuirements() {
    this.eventService.AddEvent(this.event.requirements);
  }
}

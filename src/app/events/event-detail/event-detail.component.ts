import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { ActivatedRoute, Params } from '@angular/router';
0;
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  event: Event;
  index: number;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.event = this.eventService.getSingleEvent(this.index);
    });
  }
  onAddReuirements() {
    this.eventService.AddEvent(this.event.requirements);
  }
}

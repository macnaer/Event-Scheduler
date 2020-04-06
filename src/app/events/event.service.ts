import { Event } from './event.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {
  eventSelected = new EventEmitter<Event>();
  private events: Event[] = [
    new Event(
      'Java Script Patterns',
      'For advanced skills students',
      'https://monsterlessons.com/api/storage/uploads/posters/9e7ad2a5-9047-4139-b25b-2ede6cec1fc8/poster.png'
    ),
    new Event(
      'Java for true coders',
      'Java is the best programming ...',
      'https://upload.wikimedia.org/wikipedia/uk/8/85/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Java.png'
    ),
  ];
  getEvents() {
    return this.events.slice();
  }
}

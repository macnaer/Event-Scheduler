import { HttpClient } from '@angular/common/http';
import { EventService } from '../events/event.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor(private eventService: EventService, private http: HttpClient) {}
  private URL = 'https://eventsheduller.firebaseio.com/events.json';
  storeEvents() {
    const events = this.eventService.getEvents();
    return this.http
      .put(this.URL, events)
      .subscribe((responce) => console.log(responce));
  }
}

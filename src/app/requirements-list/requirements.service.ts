import { Requirement } from './requirements.model';
import { EventEmitter } from '@angular/core';

export class RequirementService {
  eventUpdate = new EventEmitter<Requirement[]>();
  requirements: Requirement[] = [
    new Requirement('Java Script', 'Base knowlage of OOP'),
    new Requirement('HTML, JS, CSS,', 'REST API'),
  ];

  getRequirements() {
    return this.requirements.slice();
  }
  onAddRequirements(requirements: Requirement) {
    this.requirements.push(requirements);
    this.eventUpdate.emit(this.requirements.slice());
  }

  AddRequirements(requirements: Requirement[]) {
    this.requirements.push(...requirements);
    this.eventUpdate.emit(this.requirements.slice());
  }
}

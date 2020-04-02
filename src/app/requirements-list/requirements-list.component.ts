import { Component, OnInit } from '@angular/core';
import { Requirement } from './requirements.model';

@Component({
  selector: 'app-requirements-list',
  templateUrl: './requirements-list.component.html',
  styleUrls: ['./requirements-list.component.scss']
})
export class RequirementsListComponent implements OnInit {
  requirements: Requirement[] = [
    new Requirement('Java Script', 'Base knowlage of OOP'),
    new Requirement('HTML, JS, CSS,', 'REST API')
  ];
  constructor() {}

  ngOnInit(): void {}

  onRequirementAdded(requirement: Requirement) {
    this.requirements.push(requirement);
  }
}

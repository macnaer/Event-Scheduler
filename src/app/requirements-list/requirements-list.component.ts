import { Component, OnInit } from '@angular/core';
import { Requirement } from './requirements.model';
import { RequirementService } from './requirements.service';

@Component({
  selector: 'app-requirements-list',
  templateUrl: './requirements-list.component.html',
  styleUrls: ['./requirements-list.component.scss'],
})
export class RequirementsListComponent implements OnInit {
  requirements: Requirement[];
  constructor(private requirementService: RequirementService) {}

  ngOnInit(): void {
    this.requirements = this.requirementService.getRequirements();
    this.requirementService.eventUpdate.subscribe(
      (requirements: Requirement[]) => {
        this.requirements = requirements;
      }
    );
  }
}

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Requirement } from '../requirements.model';
import { RequirementService } from '../requirements.service';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-requirements-edit',
  templateUrl: './requirements-edit.component.html',
  styleUrls: ['./requirements-edit.component.scss'],
})
export class RequirementsEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') reqForm: NgForm;
  constructor(private requirementService: RequirementService) {}
  subscription: Subscription;
  editMode = false;
  editedRequirement: Requirement;

  onAddItem(form: NgForm) {
    const skills = form.value.skills;
    const description = form.value.description;
    const newRequirement = new Requirement(skills, description);
    this.requirementService.onAddRequirements(newRequirement);
  }

  ngOnInit(): void {
    this.subscription = this.requirementService.startEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedRequirement = this.requirementService.getSingleRequirement(
          index
        );
        this.reqForm.setValue({
          skills: this.editedRequirement.name,
          description: this.editedRequirement.description,
        });
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

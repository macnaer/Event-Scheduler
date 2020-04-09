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
  editedItem: number;
  editedRequirement: Requirement;

  onAddItem(form: NgForm) {
    const skills = form.value.skills;
    const description = form.value.description;
    const newRequirement = new Requirement(skills, description);
    if (this.editMode) {
      this.requirementService.updateRequirements(
        this.editedItem,
        newRequirement
      );
    } else {
      this.requirementService.onAddRequirements(newRequirement);
    }
    form.reset();
    this.editMode = false;
  }
  onClear() {
    this.reqForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.requirementService.deleteRequirement(this.editedItem);
    this.onClear();
  }

  ngOnInit(): void {
    this.subscription = this.requirementService.startEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItem = index;
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

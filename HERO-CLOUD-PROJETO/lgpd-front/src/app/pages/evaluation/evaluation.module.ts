import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationRoutingModule} from "./evaluation-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EvaluationFormComponent,
    EvaluationListComponent, 
  ],

  imports: [
    CommonModule,
    SharedModule,
    EvaluationRoutingModule
  ]
})
export class EvaluationModule { }

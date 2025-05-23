import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }

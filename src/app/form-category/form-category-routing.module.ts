import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCategoryPage } from './form-category.page';

const routes: Routes = [
  {
    path: '',
    component: FormCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCategoryPageRoutingModule {}

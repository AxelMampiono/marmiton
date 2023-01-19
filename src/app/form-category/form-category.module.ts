import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCategoryPageRoutingModule } from './form-category-routing.module';

import { FormCategoryPage } from './form-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCategoryPageRoutingModule
  ],
  declarations: [FormCategoryPage]
})
export class FormCategoryPageModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = []

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes) ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
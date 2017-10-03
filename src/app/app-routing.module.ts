import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InscriptionComponent } from './inscription/inscription.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
  { path: 'catalogue',  component: CatalogueComponent, data: {title: 'Catalogue'}},
  { path: 'inscription',  component: InscriptionComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
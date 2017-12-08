import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrioritiesListPage } from './priorities-list';

@NgModule({
  declarations: [
    PrioritiesListPage,
  ],
  imports: [
    IonicPageModule.forChild(PrioritiesListPage),
  ],
})
export class PrioritiesListPageModule {}

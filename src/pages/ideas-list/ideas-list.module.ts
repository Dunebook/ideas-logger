import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdeasListPage } from './ideas-list';

@NgModule({
  declarations: [
    IdeasListPage,
  ],
  imports: [
    IonicPageModule.forChild(IdeasListPage),
  ],
})
export class IdeasListPageModule {}

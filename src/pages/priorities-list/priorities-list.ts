import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { IdeaService } from '../../services/idea.service';
import { Idea } from '../../models/idea.model';

@IonicPage()
@Component({
  selector: 'page-priorities-list',
  templateUrl: 'priorities-list.html',
})
export class PrioritiesListPage {
  priorityList: Idea[];
  
  constructor(private ideaService: IdeaService) {
  }

  ionViewWillEnter() {
    this.getPriorityList();
  }
 
  getPriorityList() {
    this.priorityList = this.ideaService.getPriorityList();
  }
  
  removeFromPriorityList(index: number) {
    this.ideaService.removeIdeaFromPriorityList(index);
    this.getPriorityList();
  }

}

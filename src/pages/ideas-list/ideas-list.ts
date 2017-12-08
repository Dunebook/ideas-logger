import { Component, OnInit } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { IdeaService } from '../../services/idea.service';
import { Idea } from '../../models/idea.model';

@IonicPage()
@Component({
  selector: 'page-ideas-list',
  templateUrl: 'ideas-list.html',
})
export class IdeasListPage implements OnInit {
  ideas: Idea[];
  
  constructor(private ideaService: IdeaService, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeasListPage');
  }
  
  ngOnInit() {
    this.getIdeas();
  }
  
  createIdea(form: NgForm) {
    this.ideaService.addIdea(form.value.title, form.value.content);
    form.reset();
    this.getIdeas();
  }
  
  addToPriorities(idea: Idea) {
    const alert = this.alertCtrl.create({
      title: 'Add to Priority List',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the Idea to your list of priorities?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.ideaService.addIdeaToPriorityList(idea);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Request cancelled');
          }
        }
      ]
    });
    alert.present();
    console.log('add to priority clicked');
  }
  
  removeFromPriority(index: number) {
    this.ideaService.removeIdeaFromPriorityList(index);
  }
  
  isAPriority(idea: Idea) {
    return this.ideaService.isIdeaAPriority(idea);
  }
  
  private getIdeas() {
    this.ideas = this.ideaService.getIdeas();
  }
}

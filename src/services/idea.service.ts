import { Idea } from '../models/idea.model';

export class IdeaService {
  private ideas: Idea[] = []; 
  private priorityList: Idea[] = [];
   
  addIdea(title: string, content: string) {
    this.ideas.push(new Idea(title, content));
  }
  
  getIdeas() {
    return this.ideas.slice();
  }
  
  removeIdea(index: number) {
    this.ideas.splice(index, 1);
  }
  
  addIdeaToPriorityList(idea: Idea) {
    this.priorityList.push(idea);
  }
  
  removeIdeaFromPriorityList(index: number) {
    this.priorityList.splice(index, 1);  
  }
  
  getPriorityList() {
    // Get a copy of the priority list array.
    return this.priorityList.slice();
  }
  
  isIdeaAPriority(idea: Idea) {
    return this.priorityList.find((id: Idea) => {
      return id == idea;
    })
  }
  
}
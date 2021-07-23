import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-monstermanual',
  templateUrl: './monstermanual.component.html',
  styleUrls: ['./monstermanual.component.scss']
})
export class MonstermanualComponent{
  monsterData:any;
  actions: any[] = [];
  specialAbilities: any[] = [];
  legendaryActions: any[] = [];


  submit(form: NgForm){
    let userInput = form.value["user-spell-input"];
    this.actions = [];
    this.specialAbilities = [];
    this.legendaryActions = [];
    this.http.get(`https://www.dnd5eapi.co/api/monsters/${userInput}`).subscribe(data => {
    this.monsterData = data;

    for(let i = 0; i < this.monsterData.actions.length; i++){
      this.actions.push(this.monsterData.actions[i])}
    
    for(let i = 0; i < this.monsterData.special_abilities.length; i++){
        this.specialAbilities.push(this.monsterData.special_abilities[i])}
    
    for(let i = 0; i < this.monsterData.legendary_actions.length; i++){
      this.legendaryActions.push(this.monsterData.legendary_actions[i])}
        

    console.log(this.monsterData)
  })

      

    
  }
  constructor(private http: HttpClient){};

}

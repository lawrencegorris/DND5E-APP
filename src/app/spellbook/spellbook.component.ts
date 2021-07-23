import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-spellbook',
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.scss']
})

export class SpellbookComponent{
  
  spellData:any;
  classes: any[] = [];
  descriptions: any[] = [];


  submit(form: NgForm){
    let userInput = form.value["user-spell-input"];
    userInput.toLowerCase();
    this.classes = [];
    this.descriptions = [];
    this.http.get(`https://www.dnd5eapi.co/api/spells/${userInput}`).subscribe(data => {
    this.spellData = data;

      for(let i = 0; i < this.spellData.classes.length; i++){
        this.classes.push(this.spellData.classes[i]['name'])
        console.log(this.classes)}

      for(let i = 0; i < this.spellData.desc.length; i++){
        this.descriptions.push(this.spellData.desc[i])
        console.log(this.descriptions[i])}
    })

    
  }
  constructor(private http: HttpClient){};
}




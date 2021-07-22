import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-spellbook',
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.scss']
})

export class SpellbookComponent{

 showSpellData(form: NgForm){

  //fetch API data each time form is submitted
   let userInput = form.value["user-spell-input"];
    //document.querySelector('#test')!.innerHTML = userInput;
    this.http.get(`https://www.dnd5eapi.co/api/spells/${userInput}`).subscribe(data=>{
      console.log('data:', data)
    });
  }
  constructor(private http: HttpClient){};
}




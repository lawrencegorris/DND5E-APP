import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpellbookComponent } from './spellbook/spellbook.component';
import { MonstermanualComponent } from './monstermanual/monstermanual.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'spellbook', component: SpellbookComponent},
  {path: 'monstermanual', component: MonstermanualComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpellbookComponent,
    MonstermanualComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

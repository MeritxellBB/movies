import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterPageRoutingModule } from './character-page-routing.module';
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterPageRoutingModule
  ]
})
export class CharacterPageModule { }

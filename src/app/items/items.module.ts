

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayListComponent } from './display/display-list.component';
import { DisplayCardComponent } from './display/display-card.component';
import { AddItemComponent } from './add-item/add-item.component';



@NgModule({
  declarations: [DisplayListComponent, DisplayCardComponent, AddItemComponent],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }


exports: [
  AddItemComponent,
  DisplayListComponent,
  DisplayCardComponent
]
})
export class ItemsModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// left for brevity

imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],


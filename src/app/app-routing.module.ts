import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ShowComponent } from './Views/show/show.component';
import { NewComponent } from './Views/new/new.component';
import { EditComponent } from './Views/edit/edit.component'; 

import { LogsComponent } from './Views/logs/logs.component';

const routes: Routes = [
  {
    path:'',
    component: ShowComponent
    
  },

  {
    path:'edit/:id',
    component: EditComponent
    
  },

  {
    path:'new',
    component: NewComponent
    
  },

  {
    path:'logs',
    component: LogsComponent
    
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './Views/show/show.component';
import { NewComponent } from './Views/new/new.component';
import { EditComponent } from './Views/edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

import { MatTableModule } from '@angular/material/table';
import { LogsComponent } from './Views/logs/logs.component' 


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    NewComponent,
    EditComponent,
    LogsComponent
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

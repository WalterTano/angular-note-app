import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditNoteModalComponent } from './components/add-edit-note-modal/add-edit-note-modal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoteComponent } from './components/note/note.component';
import { NoteGridComponent } from './components/note-grid/note-grid.component';
import { AddNoteButtonComponent } from './components/add-note-button/add-note-button.component';
import { DeleteNoteModalComponent } from './components/delete-note-modal/delete-note-modal.component';

import { HttpClientModule } from '@angular/common/http';
import { FixedBottomContentComponent } from './fixed-bottom-content/fixed-bottom-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditNoteModalComponent,
    NavBarComponent,
    FooterComponent,
    NoteComponent,
    NoteGridComponent,
    AddNoteButtonComponent,
    DeleteNoteModalComponent,
    FixedBottomContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

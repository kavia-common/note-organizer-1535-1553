import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      { path: 'notes', component: NoteListComponent },
      { path: 'notes/new', component: NoteEditComponent },
      { path: 'notes/:id', component: NoteDetailComponent },
      { path: 'notes/:id/edit', component: NoteEditComponent },
      { path: '**', redirectTo: 'notes' }
    ]
  }
];

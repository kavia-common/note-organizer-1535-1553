import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  searchValue = '';

  constructor() {}

  ngOnInit() {}

  loadNotes() {}

  searchNotes() {}

  selectNote(note: Note) {}

  createNote() {}
}

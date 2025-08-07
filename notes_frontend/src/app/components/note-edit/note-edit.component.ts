import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css'],
})
export class NoteEditComponent implements OnInit {
  note: Partial<Note> = {};
  isEditMode = false;

  constructor() {}

  ngOnInit() {}

  saveNote() {}

  cancel() {}
}

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notesService: NotesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        const existing = this.notesService.getNoteById(id);
        if (!existing) {
          this.router.navigate(['/notes']);
          return;
        }
        this.note = { ...existing };
        this.isEditMode = true;
      } else {
        this.isEditMode = false;
        this.note = {};
      }
    });
  }

  saveNote() {
    if (!this.note.title || !this.note.content) return;
    if (this.isEditMode && this.note.id) {
      this.notesService.updateNote(this.note.id, {
        title: this.note.title!,
        content: this.note.content!,
      });
    } else {
      const newNote = this.notesService.createNote({
        title: this.note.title!,
        content: this.note.content!,
      });
      this.note.id = newNote.id;
    }
    this.router.navigate(['/notes', this.note.id]);
  }

  cancel() {
    if (this.isEditMode && this.note.id) {
      this.router.navigate(['/notes', this.note.id]);
    } else {
      this.router.navigate(['/notes']);
    }
  }
}

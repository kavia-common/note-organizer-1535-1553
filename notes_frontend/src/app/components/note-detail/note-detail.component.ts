import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
})
export class NoteDetailComponent implements OnInit {
  note: Note | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notesService: NotesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        this.router.navigate(['/notes']);
        return;
      }
      this.note = this.notesService.getNoteById(id);
      if (!this.note) {
        this.router.navigate(['/notes']);
      }
    });
  }

  editNote(note?: Note) {
    if (!note) return;
    this.router.navigate(['/notes', note.id, 'edit']);
  }

  deleteNote(note?: Note) {
    if (!note || !window.confirm('Delete this note?')) return;
    this.notesService.deleteNote(note.id);
    this.router.navigate(['/notes']);
  }

  backToList() {
    this.router.navigate(['/notes']);
  }
}

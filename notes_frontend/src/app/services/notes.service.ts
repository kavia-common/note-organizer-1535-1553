import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[] = [];
  private selectedId: string | null = null;

  constructor() {
    // Initialize with a demo note
    this.notes = [
      {
        id: this.generateId(),
        title: 'Welcome to Notes',
        content: 'This is your first note!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }

  // PUBLIC_INTERFACE
  getNotes(query?: string): Note[] {
    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      return this.notes.filter(
        (n) =>
          n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)
      );
    }
    return [...this.notes].sort(
      (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
    );
  }

  // PUBLIC_INTERFACE
  getNoteById(id: string): Note | undefined {
    return this.notes.find((n) => n.id === id);
  }

  // PUBLIC_INTERFACE
  createNote(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Note {
    const newNote: Note = {
      ...note,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.notes.unshift(newNote);
    return newNote;
  }

  // PUBLIC_INTERFACE
  updateNote(id: string, update: Partial<Omit<Note, 'id' | 'createdAt'>>): Note | undefined {
    const note = this.getNoteById(id);
    if (!note) return undefined;
    Object.assign(note, update);
    note.updatedAt = new Date();
    return note;
  }

  // PUBLIC_INTERFACE
  deleteNote(id: string): void {
    this.notes = this.notes.filter((n) => n.id !== id);
  }

  // PUBLIC_INTERFACE
  selectNote(id: string | null): void {
    this.selectedId = id;
  }

  // PUBLIC_INTERFACE
  getSelectedId(): string | null {
    return this.selectedId;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 10);
  }
}

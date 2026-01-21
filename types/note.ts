export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface Note {
      id: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      tag: NoteTag,
}

export type Tags = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
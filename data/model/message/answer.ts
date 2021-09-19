import { MessageDB } from "./";
export class AnswerDB {
  id: string;
  content: string;
  read: boolean;
  parent: MessageDB;
  createdAt: Date;
  updatedAt: Date;
  constructor({ id, content, read, parent, createdAt, updatedAt }: {
    id: string;
    content: string;
    read: boolean;
    parent: MessageDB;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.content = content;
    this.read = read;
    this.parent = parent;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

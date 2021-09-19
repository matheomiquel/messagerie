import { Message } from "./";
export class Answer {
  id: string;
  content: string;
  read: boolean;
  parent: Message;
  constructor({ id, content, read, parent }: {
    id: string;
    content: string;
    read: boolean;
    parent: Message;
  }) {
    this.id = id;
    this.content = content;
    this.read = read;
    this.parent = parent;
  }
}

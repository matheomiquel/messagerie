export class Message {
  id: string;
  content: string;
  read: boolean;
  constructor({ id, content, read }: {
    id: string;
    content: string;
    read: boolean;
  }) {
    this.id = id;
    this.content = content;
    this.read = read ? true : false;
  }
}

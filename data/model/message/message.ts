export class MessageDB {
  id: string;
  content: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
  constructor({ id, content, read, createdAt, updatedAt }: {
    id: string;
    content: string;
    read: boolean;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.content = content;
    this.read = read;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

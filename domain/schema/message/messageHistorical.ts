export class MessageHistorical {
  id: string;
  content: string;
  message_id: number;
  constructor({ id, content, message_id }: {
    id: string;
    content: string;
    message_id: number;
  }) {
    this.id = id;
    this.content = content;
    this.message_id = message_id;
  }
}

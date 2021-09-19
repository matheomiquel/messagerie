import { MessageHistoricalAction } from "../..";
export class MessageHistoricalDB {
  id: string;
  content: string;
  action: typeof MessageHistoricalAction;
  message_id: number;
  createdAt: Date;
  updatedAt: Date;
  constructor({ id, content, action, message_id, createdAt, updatedAt }: {
    id: string;
    content: string;
    action: typeof MessageHistoricalAction;
    message_id: number;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.content = content;
    this.action = action;
    this.message_id = message_id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

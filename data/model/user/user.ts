export class UserDB {
  id: string;
  pseudo: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  constructor({ id, pseudo, email, password, createdAt, updatedAt }: {
    id: string;
    pseudo: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

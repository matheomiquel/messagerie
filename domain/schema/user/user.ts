export class User {
  id: string;
  pseudo: string;
  email: string;
  token?: string;
  constructor({ id, pseudo, email, token }: {
    id: string;
    pseudo: string;
    email: string;
    token?: string;
  }) {
    this.id = id;
    this.pseudo = pseudo;
    this.email = email;
    this.token = token;
  }
}

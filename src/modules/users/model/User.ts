import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor({ id, name, admin, created_at, email, updated_at }: User) {
    if (!id) {
      this.id = uuidV4();
    } else {
      this.id = id;
    }
    this.name = name;
    this.admin = admin;
    this.created_at = created_at;
    this.email = email;
    this.updated_at = updated_at;
  }
}

export { User };

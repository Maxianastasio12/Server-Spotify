import { Injectable } from '@nestjs/common';
import { strict } from 'assert';
import { UsersController } from './users.controller';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor() {
    let user = {
      "id": "1",
    "name": "federico lestta",
    "email": "fede@example.com"
  }
  this.users.push(user)
   user = {
    "id": "2",
  "name": "julianlestta",
  "email": "juli@example.com"
   };
  
   this.users.push(user)
   user = {
    "id": "3",
  "name": "raul mendez",
  "email": "mendez@example.com"
   };
  }
  create(user: User): User {
    const newUser = { id: user.id, 
      name: user.name,
      email: user.email
     };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User {
    return this.users.find(user => user.id === id);
  }

  update(id: string, userData: Partial<User>): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...userData };
      return this.users[userIndex];
    }
  }

  remove(id: string): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
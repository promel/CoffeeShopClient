import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUsers():User[]{
    let user = new User();
    user.email = 'jkm.more@gmail.com';
    user.firstName = 'Melvin';
    user.lastName = 'More';
    user.id = 1;
    return [user]
  }
}

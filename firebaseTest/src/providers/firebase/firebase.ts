import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { User } from '../../models/firebase-user';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afData: AngularFireDatabase) { }

  addUser(user: string) {
    this.afData.list('/users/').push(user);
  }

  removeUser(uid: string) {
    this.afData.list('/users/').remove(uid);
  }

}

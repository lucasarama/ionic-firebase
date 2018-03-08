import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  newUser = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) { }

  addUser() {
    this.firebaseProvider.addUser(this.newUser);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

import { User } from '../../models/firebase-user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  
  constructor(private afAuth: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) { }

  async login(user: User) {
    try {
      // On stock le resultat de la fonction de conenxion
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }   
    } catch (error) {
      this.showAlert(error.message);
    }   
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }   

    } catch (error) {
      this.showAlert(error.message);
    }
  }

  showAlert(msg: string) {
    let alert = this.alertCtrl.create({
      title: 'Problem !',
      subTitle: msg,
      buttons: ['Try again']
    });
    alert.present();
  }
}



import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imgUrl = "assets/img/"
  imgName = ["background.png"]

  constructor(public navCtrl: NavController) {

  }

}

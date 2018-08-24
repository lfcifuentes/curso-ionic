import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service'; 
/**
 * Generated class for the CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [ DeezerServiceProvider ],
})
export class CancionesPage {

  public playlist: any;
  public songs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,    
              public ds: DeezerServiceProvider) {
    this.playlist = this.navParams.get('playlist')
    this.songs    = []; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
    this.ds.getPlayListSons(this.playlist.id).subscribe(
      data => {
        this.songs = data.data; 
        console.log("listado de las  canciones");
        console.log(data);
      }
    );
  }

}

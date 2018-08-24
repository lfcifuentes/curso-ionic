import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service'; 
/**
 * Generated class for the PlaylistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { CancionesPage } from '../canciones/canciones';

@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [ DeezerServiceProvider ],
})
export class PlaylistsPage {

  public user:any;
  public playlists:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,    
              public ds: DeezerServiceProvider) {
    this.user      = this.navParams.get('user');
    this.playlists = [];
  }

  goToCanciones(playlist){
    this.navCtrl.push(CancionesPage, { playlist: playlist });
  }

  ionViewDidLoad() {
    this.ds.getUserPlayLists(this.user.id).subscribe(list=>{
      this.playlists = list.data;
      console.log(list.data);
    });
    console.log('ionViewDidLoad PlaylistsPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlaylistsPage } from '../playlists/playlists';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service'; 

/**
 * Generated class for the PerfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ DeezerServiceProvider ],
})
export class PerfilesPage {

  public users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,    
              public ds: DeezerServiceProvider) {
    this.users = [];
  }

  goToPlaylist(user){
    // mandamos la vista de lstas de reproduccion con el id del usuario
    this.navCtrl.push(PlaylistsPage,{user:user});
  }

  ionViewDidLoad() { 
    this.ds.getProfiles().map(userId=>{
      this.ds.getUserDetail(userId).subscribe(user=>{
          this.users.push(user);
      });
    }); 
    console.log('ionViewDidLoad PerfilesPage');
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class  DeezerServiceProvider {

  public deezerAPI: string;

  constructor(public http: Http) { 
    this.deezerAPI = "/deezerAPI/";

    console.log('Hello DeezerServiceProvider Provider');
  } 

  getProfiles(){
    return ["197718683", "686121193", "1018322506", "380556027", "721275053", "1402187406","361508093"];
  }

  getUserDetail(userId){
    return this.http.get(this.deezerAPI+'user/'+userId)
                    .map( res => res.json());
  }

  getUserPlayLists(userId){
    return this.http.get(this.deezerAPI+'user/'+userId+'/playlists')
                    .map( res => res.json());
  }

  getPlayListSons(playlistsId){
    return this.http.get(this.deezerAPI + "playlist/" + playlistsId + "/tracks")
                    .map( res => res.json() )
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {  BehaviorSubject } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class ManagerService {

  constructor(private _http: Http) { }

  playerList = [];
  Observer = new BehaviorSubject(this.playerList);

  

  addPlayer(newPlayer){
    console.log("Arrived at service and data is", newPlayer)
   this._http.post('/players', newPlayer)
   .subscribe(
     (response) => {
       console.log("returned to Angular service");
       this.retrieveAll();
     },
     (err) => {
       console.log("failed at addPlayer in service", err)
     }
   )
    
  }

  retrieveAll() {
    return this._http.get('/listplayers')
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.playerList = response.json();
        this.Observer.next(this.playerList);
      },
      (err) => {
        console.log("failed", err.json )
      }
    )

  }

  removePlayer(id){
    console.log("At services and id is:", id);
    this._http.delete(`/players/${id}`)
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.playerList = response.json();
        this.Observer.next(this.playerList);
      },
      (err) => {
        console.log("failed", err.json )
      }
    )
  }

  updateStatus(id, status, game){
    this._http.put(`/players/${id}`, {status: status, game: game})
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.playerList = response.json();
        this.Observer.next(this.playerList);
      },
      (err) => {
        console.log("failed", err.json )
      }
    )
  }

}

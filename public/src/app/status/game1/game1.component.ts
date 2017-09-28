import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  
  constructor(private _managerService: ManagerService,
    private _router: Router,
    private _route: ActivatedRoute) {
      this._route.paramMap.subscribe( params => {
        console.log(params.get('num'));
        this.gameNum = params.get('num');
      })
      this._managerService.Observer.subscribe((playerList) => {
        this.allPlayers = playerList;
        console.log(this.allPlayers);
      })
      this.getPlayers();
    }
  
     getPlayers(){
      this._managerService.retrieveAll();
     }
    
    allPlayers = [];

  ngOnInit() {
  }
  gameNum;

  updatePlay(playerID){
    status = "Playing";
    let game = this.gameNum;
    this._managerService.updateStatus(playerID, status, game);
  }
  updateNot(playerID){
    status = "Not Playing";
    let game = this.gameNum;
    this._managerService.updateStatus(playerID, status, game);
  }
  updateUndecided(playerID){
    status = "Undecided";
    let game = this.gameNum;
    this._managerService.updateStatus(playerID, status, game);
  }
}

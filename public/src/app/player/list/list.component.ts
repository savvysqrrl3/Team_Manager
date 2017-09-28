import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _managerService: ManagerService) {
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

  onDelete(id){
    console.log(id);
    this._managerService.removePlayer(id);
  }

  ngOnInit() {}

}

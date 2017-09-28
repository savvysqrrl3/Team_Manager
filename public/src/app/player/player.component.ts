import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private _managerService: ManagerService) { }

  ngOnInit() {
  }

}

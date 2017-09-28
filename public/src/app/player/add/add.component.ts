import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _managerService: ManagerService,
    private _router: Router) { }

  newPlayer = {
    name: "",
    preferred_position: ""
  };

formSubmit(){
  console.log("New object to send to DB:", this.newPlayer);
  this._managerService.addPlayer(this.newPlayer)
  this.newPlayer = {
    name: "",
    preferred_position: ""
  }
  this._router.navigate(['/players/list']);
}

  ngOnInit() {
  }

}

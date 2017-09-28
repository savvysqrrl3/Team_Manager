import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private _managerService: ManagerService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }
  // gameNum = this.retrieveNum();
  
  // retrieveNum(){
  //   this._route.paramMap.subscribe( params => {
  //     params.get('num');
  //     console.log(params.get('num'))
  //   })
  // }
  

  ngOnInit() {
  }

}

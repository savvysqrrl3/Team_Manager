import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './player/list/list.component';
import { AddComponent } from './player/add/add.component';
import { Game1Component } from './status/game1/game1.component';

const routes: Routes = [
  { path: '', redirectTo:'players/list', pathMatch: 'full' },
  { path: 'players', redirectTo:'players/list', pathMatch: 'full' },
  { path: 'players', component: PlayerComponent, children:[
    { path: 'list', component: ListComponent },
    { path: 'addplayer', component: AddComponent }
  ]  },
  { path: 'status', redirectTo:'status/game/1', pathMatch: 'full' },
  { path: 'status', component: StatusComponent, children:[
    { path: 'game/:num', component: Game1Component }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ManagerService } from './manager.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './player/list/list.component';
import { AddComponent } from './player/add/add.component';
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    StatusComponent,
    ListComponent,
    AddComponent,
    Game1Component,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

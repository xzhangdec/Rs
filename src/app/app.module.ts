import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserTileComponent } from './components/user-tile/user-tile.component';
import { ChosenUserComponent } from './pages/chosen-user/chosen-user.component';


import { UserService } from './shared/user.service';
import { userRoute } from './shared/user.routes';
import { UsersListComponent } from './pages/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTileComponent,
    ChosenUserComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    userRoute

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

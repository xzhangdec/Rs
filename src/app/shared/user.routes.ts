import { Routes, RouterModule } from "@angular/router";
import { ChosenUserComponent } from "../pages/chosen-user/chosen-user.component";
import { UsersListComponent } from "../pages/users-list/users-list.component";
import { UserTileComponent } from "../components/user-tile/user-tile.component"

const USER_ROUTES: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full'},
  { path: 'user', component: UserTileComponent },
  { path: 'user/:id', component: ChosenUserComponent },
];

export const userRoute =  RouterModule.forRoot(USER_ROUTES);

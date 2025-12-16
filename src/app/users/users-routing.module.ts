import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserYosrAmmarComponent } from '../list-user-yosr-ammar/list-user-yosr-ammar.component';
import { UserCreateYosrAmmarComponent } from '../user-create-yosr-ammar/user-create-yosr-ammar.component';
import { UserUpdateYosrAmmarComponent } from '../user-update-yosr-ammar/user-update-yosr-ammar.component';
import { UserDetailYosrAmmarComponent } from '../user-detail-yosr-ammar/user-detail-yosr-ammar.component';

const routes: Routes = [
  { path: '', component: ListUserYosrAmmarComponent },

  { path: 'add', component: UserCreateYosrAmmarComponent },

  { path: 'update/:id', component: UserUpdateYosrAmmarComponent },

  { path: 'details/:id', component: UserDetailYosrAmmarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}


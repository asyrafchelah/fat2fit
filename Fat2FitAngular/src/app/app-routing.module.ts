import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ActivitiesComponent } from './activities/activities.component';



const routes: Routes = [
  {path: 'menu', component: SideMenuComponent},
  {path: 'user', component: CreateUserComponent},
  {path: 'group', component: CreateGroupComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

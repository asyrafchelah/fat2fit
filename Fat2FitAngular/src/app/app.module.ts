import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreateGroupComponent,
    SideMenuComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

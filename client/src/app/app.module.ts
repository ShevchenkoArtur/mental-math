import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SettingsComponent} from "./settings/settings.component";
import { MainComponent } from './main/main.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PlayZoneComponent } from './play-zone/play-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    MainComponent,
    AchievementsComponent,
    PlayZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

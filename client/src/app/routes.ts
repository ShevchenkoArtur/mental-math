import {Routes} from "@angular/router";
import {SettingsComponent} from "./settings/settings.component";
import {MainComponent} from "./main/main.component";
import {AchievementsComponent} from "./achievements/achievements.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'achievements', component: AchievementsComponent },
];

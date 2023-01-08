import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HousesComponent } from './houses/houses.component';
import { SensorComponent } from './sensor/sensor.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpPageComponent } from './help-page/help-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'houses', component: HousesComponent},
  { path: 'sensor', component: SensorComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'help', component: HelpPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    HousesComponent,
    SensorComponent,
    AnalyticsComponent,
    SettingsComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

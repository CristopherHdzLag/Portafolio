import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarSchematicComponent } from './screens/home-screen/navbar-schematic/navbar-schematic.component';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMeComponent } from './screens/home-screen/about-me/about-me.component';
import { WorkExperienceComponent } from './screens/home-screen/work-experience/work-experience.component';
import { MatCardModule } from '@angular/material/card';
import { TechnologiesComponent } from './screens/home-screen/technologies/technologies.component';
import {MatChipsModule} from '@angular/material/chips';
import { FooterComponent } from './screens/home-screen/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavbarSchematicComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    TechnologiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

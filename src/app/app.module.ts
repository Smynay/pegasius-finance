import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./modules/material/material.module";

import { HeaderComponent } from "./components/header/header.component";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { MainSectionComponent } from "./sections/main-section/main-section.component";
import { PoolsSectionComponent } from "./sections/pools-section/pools-section.component";
import { SimpleCardComponent } from "./components/simple-card/simple-card.component";
import { AboutSectionComponent } from './sections/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainSectionComponent,
    PoolsSectionComponent,
    SimpleCardComponent,
    AboutSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

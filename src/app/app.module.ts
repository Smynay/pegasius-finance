import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./modules/material/material.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/home/header/header.component";
import { BlogCardComponent } from "./components/home/blog-card/blog-card.component";
import { FooterComponent } from "./components/home/footer/footer.component";
import { SimpleCardComponent } from "./components/home/simple-card/simple-card.component";

import { DashboardHeaderComponent } from "./components/dashboard/header/header.component";

import { HomeComponent } from "./views/home/home.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

import { MainSectionComponent } from "./sections/main-section/main-section.component";
import { PoolsSectionComponent } from "./sections/pools-section/pools-section.component";
import { AboutSectionComponent } from "./sections/about-section/about-section.component";
import { FeaturesSectionComponent } from "./sections/features-section/features-section.component";
import { PartnersSectionComponent } from "./sections/partners-section/partners-section.component";
import { BlogSectionComponent } from "./sections/blog-section/blog-section.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainSectionComponent,
    PoolsSectionComponent,
    SimpleCardComponent,
    AboutSectionComponent,
    FeaturesSectionComponent,
    PartnersSectionComponent,
    BlogSectionComponent,
    BlogCardComponent,
    FooterComponent,
    DashboardComponent,
    DashboardHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./pages/home/about/about.component";
import { ServicesComponent } from "./pages/home/services/services.component";
import { PortfolioComponent } from "./pages/home/portfolio/portfolio.component";
import { TeamComponent } from "./pages/home/team/team.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ContactComponent } from "./pages/home/contact/contact.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroComponent } from "./pages/home/hero/hero.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

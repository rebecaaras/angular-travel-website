import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { CityCardComponent } from './city-card/city-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSectionComponent,
    PageTitleComponent,
    CityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

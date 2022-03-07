import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KaraokeService } from './services/karaoke.services';
import { ChansonComponent } from './chanson/chanson.component';
import { ChansonDetailComponent } from './chanson-detail/chanson-detail.component';
import { ListeChansonsComponent } from './liste-chansons/liste-chansons.component';

@NgModule({
  declarations: [
    AppComponent,
    ChansonComponent,
    ChansonDetailComponent,
    ListeChansonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KaraokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

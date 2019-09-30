import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DetailsListComponent } from './details/details-list/details-list.component';
import { DetailsService } from './shared/details.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

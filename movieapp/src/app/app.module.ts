import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { CardComponent } from './movie-dashboard/card/card.component';
import { PreviewComponent } from './movie-dashboard/preview/preview.component';
import { SafehtmlPipe } from './pipe/safehtml.pipe';
import { UpperPipe } from './pipe/upper.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { MobilePreviewComponent } from './mobile-preview/mobile-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    CardComponent,
    PreviewComponent,
    SafehtmlPipe,
    UpperPipe,
    MobilePreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

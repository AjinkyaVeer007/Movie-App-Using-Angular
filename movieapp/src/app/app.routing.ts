import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MobilePreviewComponent } from './mobile-preview/mobile-preview.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';

const routes: Routes = [
  { path: '', component: MovieDashboardComponent },
  { path: 'preview', component: MobilePreviewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

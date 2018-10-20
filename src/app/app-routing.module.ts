import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GiveFeedbackComponent } from './pages/give-feedback/give-feedback.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'give', component: GiveFeedbackComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

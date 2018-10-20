import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { GiveFeedbackComponent } from './pages/give-feedback/give-feedback.component';
const appRoutes: Routes = [
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    TableComponent,
    HomeComponent,
    GiveFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

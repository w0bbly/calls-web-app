import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallsStatsComponent } from './calls-stats/calls-stats.component';
import { CallsViewComponent } from './calls-view/calls-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallCreateComponent } from './call-create/call-create.component';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CallsStatsComponent,
    CallsViewComponent,
    CallCreateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    AngularDateTimePickerModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

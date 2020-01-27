import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallsViewComponent } from './calls-view/calls-view.component';
import { AppComponent } from './app.component';
import { CallsStatsComponent } from './calls-stats/calls-stats.component';
import { CallCreateComponent } from './call-create/call-create.component';


const routes: Routes = [
  { path: 'calls/view', component: CallsViewComponent },
  { path: 'calls/stats', component: CallsStatsComponent },
  { path: 'calls/create', component: CallCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

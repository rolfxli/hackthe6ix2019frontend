import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogonComponent} from "./logon/logon.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StatsComponent} from "./stats/stats.component";
import {LatestimageComponent} from "./latestimage/latestimage.component";


const routes: Routes = [
  { path: '', redirectTo: '/logon', pathMatch: 'full'},
  { path: 'logon', component: LogonComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'stats', component: StatsComponent},
  { path: 'latestimage', component: LatestimageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

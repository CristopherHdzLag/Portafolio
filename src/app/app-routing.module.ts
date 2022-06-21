import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationsScreenComponent } from './screens/aplications-screen/aplications-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ElectrocodeComponent } from './screens/terms-and-conditions/electrocode/electrocode.component';

const routes: Routes = [
  { path: "", component: HomeScreenComponent },
  { path: "home", component: HomeScreenComponent },
  { path: "aplications", component: AplicationsScreenComponent },
  { path: "terms-and-conditions/electrocode", component: ElectrocodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReadingComponent} from './reading.component';
import { HomeComponent} from './home.component';
import { ExampleComponent} from './example/example.component';
import { LoremComponent} from './lorem/lorem.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'reading',    component: ReadingComponent },
  { path: 'weight-test',   component: ExampleComponent },
  { path: 'lorem',   component: LoremComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

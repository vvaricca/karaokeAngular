import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChansonDetailComponent } from './chanson-detail/chanson-detail.component';
import { ListeChansonsComponent } from './liste-chansons/liste-chansons.component';

const routes: Routes = [
	{ path: '', component: ListeChansonsComponent},
	{ path: 'chansons', component: ListeChansonsComponent},
	{ path: 'chansons/:id', component: ChansonDetailComponent},
	{ path: ':id', component: ChansonDetailComponent}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

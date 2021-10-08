import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary/dictionary-page/dictionary-page.component';


const routes: Routes = [{
  path: '',
  component: DictionaryPageComponent
},
  {
    path: 'detail/:word',
    component: DictionaryDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

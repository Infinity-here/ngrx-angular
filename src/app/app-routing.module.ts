import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './comp/component/component.component';
import { Component1Component } from './comp/component1/component1.component';
import { Component2Component } from './comp/component2/component2.component';
import { AboutComponent } from './comp/about/about.component';

const routes: Routes = [
  { component: ComponentComponent, path: 'todolist' },
  {
    component: Component1Component,
    path: 'donelist',
  },
  {
    component: Component2Component,
    path: 'notdonelist',
  },
  {
    component: AboutComponent,
    path: 'about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

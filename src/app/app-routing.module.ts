import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProductPageComponent},
  {path: 'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

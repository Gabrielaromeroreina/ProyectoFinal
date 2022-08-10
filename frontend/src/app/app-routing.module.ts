import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { FamilyComponent } from './views/family/family.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProductsComponent } from './views/products/products.component';
import { RestaurantesComponent } from './views/restaurantes/restaurantes.component';
import { SignupComponent } from './views/signup/signup.component';
import { VeterComponent } from './views/veter/veter.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'family', component: FamilyComponent},
  {path: 'veter', component: VeterComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'products', component: ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

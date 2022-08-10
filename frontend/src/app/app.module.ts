import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//modulo de captura de formularios en angular 
import { FormsModule} from '@angular/forms';
//modulo de peticiones http para cliente de http de angular 
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { VeterComponent } from './views/veter/veter.component';
import { RestaurantesComponent } from './views/restaurantes/restaurantes.component';
import { FamilyComponent } from './views/family/family.component';
import { AdminComponent } from './views/admin/admin.component';
import { ProductsComponent } from './views/products/products.component';
import { CalendarComponent } from './views/calendar/calendar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    VeterComponent,
    RestaurantesComponent,
    FamilyComponent,
    AdminComponent,
    ProductsComponent,
    CalendarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

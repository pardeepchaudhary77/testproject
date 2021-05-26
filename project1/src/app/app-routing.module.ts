import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: '', redirectTo: '/',  pathMatch: 'full'},
  { path: 'details', component: PersonDetailsComponent},
  { path: 'account', component: AccountComponent},
  { path: 'cart', component: CartComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

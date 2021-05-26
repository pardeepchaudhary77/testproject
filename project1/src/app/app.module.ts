import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailsService } from './person-details.service';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    CartComponent,
    AccountComponent,
    ProductsComponent,
    OrdersComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBpaoPyNWEo1eME7kuqxzAIws1cBx2iiJM",
        authDomain: "ecommerceapp-2ec3b.firebaseapp.com",
        projectId: "ecommerceapp-2ec3b",
        storageBucket: "ecommerceapp-2ec3b.appspot.com",
        messagingSenderId: "448728299552",
        appId: "1:448728299552:web:8e5f42940ff8415f5ae445",
        measurementId: "G-BQ1NJ0FHV8"
      }
    )
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

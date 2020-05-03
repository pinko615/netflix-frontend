import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { GenresService } from './services/genres.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RentMovieComponent } from './rent-movie/rent-movie.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { GenresComponent } from './genres/genres.component';
import { TrendingComponent } from './trending/trending.component';
import { PremiereComponent } from './premiere/premiere.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ActionComponent } from './genres/action/action.component';
import { ComedyComponent } from './genres/comedy/comedy.component';
import { DocumentaryComponent } from './genres/documentary/documentary.component';
import { DramaComponent } from './genres/drama/drama.component';
import { FamilyComponent } from './genres/family/family.component';
import { RomanceComponent } from './genres/romance/romance.component';
import { TerrorComponent } from './genres/terror/terror.component';
import { WesternComponent } from './genres/western/western.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UploadComponent } from './admin/upload/upload.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { MovieListComponent } from './admin/movie-list/movie-list.component';
import { ActorListComponent } from './admin/actor-list/actor-list.component';
import { GenreListComponent } from './admin/genre-list/genre-list.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RentMovieComponent,
    ProfileComponent,
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    GenresComponent,
    TrendingComponent,
    PremiereComponent,
    MyOrdersComponent,
    ActionComponent,
    ComedyComponent,
    DocumentaryComponent,
    DramaComponent,
    FamilyComponent,
    RomanceComponent,
    TerrorComponent,
    WesternComponent,
    SignupComponent,
    AdminComponent,
    UploadComponent,
    OrdersComponent,
    UsersComponent,
    MovieListComponent,
    ActorListComponent,
    GenreListComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService, MovieService, GenresService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokeninterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

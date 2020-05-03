import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RentMovieComponent } from './rent-movie/rent-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { TrendingComponent } from './trending/trending.component';
import { GenresComponent } from './genres/genres.component';
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
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UploadComponent } from './admin/upload/upload.component';
import { UsersComponent } from './admin/users/users.component';
import { MovieListComponent } from './admin/movie-list/movie-list.component';
import { ActorListComponent } from './admin/actor-list/actor-list.component';
import { GenreListComponent } from './admin/genre-list/genre-list.component';
import { ThankYouComponent } from './thank-you/thank-you.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/orders', component: OrdersComponent },
  { path: 'admin/upload', component: UploadComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/movies', component: MovieListComponent },
  { path: 'admin/actors', component: ActorListComponent },
  { path: 'admin/genres', component: GenreListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'rent-movie/:id', component: RentMovieComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'premiere', component: PremiereComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/action', component: ActionComponent },
  { path: 'genres/comedy', component: ComedyComponent },
  { path: 'genres/documentary', component: DocumentaryComponent },
  { path: 'genres/drama', component: DramaComponent },
  { path: 'genres/family', component: FamilyComponent },
  { path: 'genres/romance', component: RomanceComponent },
  { path: 'genres/terror', component: TerrorComponent },
  { path: 'genres/western', component: WesternComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionFormComponent } from './features/suggestions/suggestion-form/suggestion-form.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { UpdateSuggestionComponent } from './update-suggestion/update-suggestion.component';
import { ListUserYosrAmmarComponent } from './list-user-yosr-ammar/list-user-yosr-ammar.component';
import { UserCreateYosrAmmarComponent } from './user-create-yosr-ammar/user-create-yosr-ammar.component';
import { UserUpdateYosrAmmarComponent } from './user-update-yosr-ammar/user-update-yosr-ammar.component';
import { UserDetailYosrAmmarComponent } from './user-detail-yosr-ammar/user-detail-yosr-ammar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListSuggestionComponent,
    HomeComponent,
    NotFoundComponent,
    SuggestionFormComponent,
    SuggestionDetailsComponent,
    UpdateSuggestionComponent,
    ListUserYosrAmmarComponent,
    UserCreateYosrAmmarComponent,
    UserUpdateYosrAmmarComponent,
    UserDetailYosrAmmarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
],
  providers: [
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


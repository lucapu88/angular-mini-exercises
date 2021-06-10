import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AutosuggestComponent } from './autosuggest/autosuggest.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ManageCookiesComponent } from './manage-cookies/manage-cookies.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { ToggleSidebarComponent } from './toggle-sidebar/toggle-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    DropdownComponent,
    AutosuggestComponent,
    ManageCookiesComponent,
    ProgressBarComponent,
    PasswordFormComponent,
    HomepageComponent,
    MultiStepFormComponent,
    ToggleSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

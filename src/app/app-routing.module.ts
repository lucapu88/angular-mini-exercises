import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosuggestComponent } from './autosuggest/autosuggest.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManageCookiesComponent } from './manage-cookies/manage-cookies.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ToggleSidebarComponent } from './toggle-sidebar/toggle-sidebar.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'textArea',
    component: TextAreaComponent,
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
  },
  {
    path: 'autosuggest',
    component: AutosuggestComponent,
  },
  {
    path: 'manageCookies',
    component: ManageCookiesComponent,
  },
  {
    path: 'progressBar',
    component: ProgressBarComponent,
  },
  {
    path: 'PasswordForm',
    component: PasswordFormComponent,
  },
  {
    path: 'MultiStepForm',
    component: MultiStepFormComponent,
  },
  {
    path: 'ToggleSidebar',
    component: ToggleSidebarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

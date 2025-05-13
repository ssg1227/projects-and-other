import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DeleteWizardComponent } from './components/delete-wizard/delete-wizard.component';
export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'wizard', component: DeleteWizardComponent },
    
    
  ];
  

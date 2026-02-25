import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Partners } from './pages/partners/partners';
import { Contact } from './pages/contact/contact';
import { EventsComponent } from './pages/events/events';
import { Booking } from './pages/booking/booking';
import { Health } from './pages/health/health';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'partners', component: Partners },
  { path: 'contact', component: Contact },
  { path: 'booking', component: Booking },
  { path: 'health', component: Health },
  { path: 'events', component: EventsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: '**', redirectTo: '' }
];

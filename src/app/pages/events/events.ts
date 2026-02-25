import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { EventsHeroComponent } from '../../shared/events-hero/events-hero';
import { EventsServicesComponent } from '../../shared/events-services/events-services';
import { EventsProvidersComponent } from '../../shared/events-providers/events-providers';
import { EventsFaqComponent } from '../../shared/events-faq/events-faq';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    Header,
    Footer,
    EventsHeroComponent,
    EventsServicesComponent,
    EventsProvidersComponent,
    EventsFaqComponent
  ],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class EventsComponent {

}

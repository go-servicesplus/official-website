import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Hero } from '../../shared/hero/hero';
import { Services } from '../../shared/services/services';
import { HowItWorks } from '../../shared/how-it-works/how-it-works';
import { Testimonials } from '../../shared/testimonials/testimonials';
import { Features } from '../../shared/features/features';
import { Newsletter } from '../../shared/newsletter/newsletter';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Hero, Services, HowItWorks, Testimonials, Features, Newsletter, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

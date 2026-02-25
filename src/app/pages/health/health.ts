import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { HealthHero } from '../../shared/health-hero/health-hero';
import { HealthServices } from '../../shared/health-services/health-services';
import { HealthSpecialists } from '../../shared/health-specialists/health-specialists';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [Header, HealthHero, HealthServices, HealthSpecialists, Footer],
  templateUrl: './health.html',
  styleUrl: './health.scss',
})
export class Health {

}

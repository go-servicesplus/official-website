import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { AboutHeroComponent } from '../../shared/about-hero/about-hero';
import { AboutMissionComponent } from '../../shared/about-mission/about-mission';
import { AboutValuesComponent } from '../../shared/about-values/about-values';
import { AboutTeamComponent } from '../../shared/about-team/about-team';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Header, Footer, AboutHeroComponent, AboutMissionComponent, AboutValuesComponent, AboutTeamComponent],
  templateUrl: './about.html',
})
export class AboutComponent {}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements OnInit {
  showIOSButton = false;
  showAndroidButton = false;
  isDevelopment = false; // Pour le mode développement

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.detectDevice();
  }

  private detectDevice() {
    const deviceInfo = this.deviceService.getDeviceInfo();

    // Détection du système d'exploitation
    const os = deviceInfo.os;
    const deviceType = deviceInfo.deviceType;

    // Mode développement : détecter si c'est un environnement de développement
    // Vous pouvez aussi utiliser une variable d'environnement
    this.isDevelopment = window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';

    if (this.isDevelopment) {
      // En développement : afficher les deux boutons
      this.showIOSButton = true;
      this.showAndroidButton = true;
      console.log('Mode développement - Affichage des deux boutons');
    } else {
      // En production : détection intelligente
      if (os === 'iOS' || os === 'Mac') {
        // Sur iOS ou Mac : afficher seulement le bouton iOS
        this.showIOSButton = true;
        this.showAndroidButton = false;
      } else if (os === 'Android' || os === 'Windows') {
        // Sur Android ou Windows : afficher seulement le bouton Android
        this.showIOSButton = false;
        this.showAndroidButton = true;
      } else {
        // Autres OS (Linux, etc.) : par défaut, afficher Android
        this.showIOSButton = false;
        this.showAndroidButton = true;
      }
    }

    console.log('Détection appareil:', {
      os,
      deviceType,
      isDevelopment: this.isDevelopment,
      showIOSButton: this.showIOSButton,
      showAndroidButton: this.showAndroidButton
    });
  }

  downloadApp(platform: 'ios' | 'android', service: 'taxi' | 'health' | 'events') {
    const appUrls = {
      taxi: {
        ios: 'https://apps.apple.com/sn/app/go-taxi-aibd/id123456789',
        android: 'https://play.google.com/store/apps/details?id=com.goservices.taxi'
      },
      health: {
        ios: 'https://apps.apple.com/sn/app/go-sante/id987654321',
        android: 'https://play.google.com/store/apps/details?id=com.goservices.health'
      },
      events: {
        ios: 'https://apps.apple.com/sn/app/go-events/id456789123',
        android: 'https://play.google.com/store/apps/details?id=com.goservices.events'
      }
    };

    const url = appUrls[service][platform];
    if (url) {
      window.open(url, '_blank');
    }
  }
}

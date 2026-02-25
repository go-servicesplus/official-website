import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMobileOpen = false;

  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  toggleMobile() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  closeMobile() {
    this.isMobileOpen = false;
  }
}

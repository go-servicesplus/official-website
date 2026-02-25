import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { BookingHero } from '../../shared/booking-hero/booking-hero';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { BookingFeatures } from '../../shared/booking-features/booking-features';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [Header, BookingHero, BookingForm, BookingFeatures, Footer],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking {

}

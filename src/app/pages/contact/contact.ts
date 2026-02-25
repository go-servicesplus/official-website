import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Hero } from '../../shared/hero/hero';
import { ContactInfo } from '../../shared/contact-info/contact-info';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Header, Hero, ContactInfo, ContactForm, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}

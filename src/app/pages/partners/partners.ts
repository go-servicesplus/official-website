import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Hero } from '../../shared/hero/hero';
import { PartnerBenefits } from '../../shared/partner-benefits/partner-benefits';
import { PartnerForm } from '../../shared/partner-form/partner-form';
import { PartnerFaq } from '../../shared/partner-faq/partner-faq';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [Header, Hero, PartnerBenefits, PartnerForm, PartnerFaq, Footer],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',
})
export class Partners {

}

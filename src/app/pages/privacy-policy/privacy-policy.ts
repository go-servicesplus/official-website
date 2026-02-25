import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { PrivacyPolicyContentComponent } from '../../shared/privacy-policy/privacy-policy';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    Header,
    Footer,
    PrivacyPolicyContentComponent
  ],
  templateUrl: './privacy-policy.html'
})
export class PrivacyPolicyPageComponent {

}

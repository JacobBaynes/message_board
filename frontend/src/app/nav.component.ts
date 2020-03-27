import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  constructor(public auth: AuthService) {}

}

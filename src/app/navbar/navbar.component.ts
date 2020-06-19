import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public isMenuCollapsed = true;
  
  constructor(public auth: AuthService) {
    
  }

  logout() {
    this.auth.logout();
  }
}

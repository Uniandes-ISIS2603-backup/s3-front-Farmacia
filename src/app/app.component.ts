import { Component , OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.title = 's3-front-farmacia';
        this.authService.start();
    }

    logout(): void {
      this.authService.logout()
  }
}

import { Component , OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Routers } from './routers';
import { HttpClientModule, HttpClient } from '@angular/common/http';


const routers = '../assets/appRoutingLinks.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  links: Routers[];

  constructor(private authService: AuthService, private http: HttpClient) {}

    ngOnInit(): void {
        this.title = 's3-front-farmacia';
        this.authService.start();
        this.http.get<Routers[]>(routers).subscribe(links => this.links = links);
    }

    logout(): void {
      this.authService.logout();
  }
}

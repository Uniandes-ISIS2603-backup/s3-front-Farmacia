import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

    ngOnInit(): void {
        this.title = 's3-front-farmacia';
    }
    constructor() {}
}

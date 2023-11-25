import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  http: HttpClient;

  username = ''; 

  selectedDate: Date = new Date();

  constructor(http: HttpClient) {
    this.http = http;
  }

  title = 'Bingo';

  counter = 0;

  increment = () => {
    this.counter += 1;
  };

  user: any = {
    name: 'Loading...',
    avatar_url:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  };

  getUser = () => {
    this.http
      .get('https://api.github.com/users/' + this.username)
      .subscribe((data) => {
        this.user = data;
      });
  };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  search = {
    query: '',
    range: '',
    type: '',
    sort: 'asc',
  };

  constructor() {}

  onSubmit() {
    console.log(this.search);
  }

  onHover(event: any) {
    console.log(event);
  }
}

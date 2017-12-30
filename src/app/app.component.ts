import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText;
  param: string = 'Name';

  people: Array<any> = [
    { Name: 'Juan', LastName: 'Estrada' },
    { Name: 'Pablo', LastName: 'Jemez' },
    { Name: 'Itzel', LastName: 'Maya' },
    { Name: 'Julieta', LastName: 'Escamilla' },
    { Name: 'Luis', LastName: 'Hernandez' },
    { Name: 'Rafael', LastName: 'Marquez' }
  ];
}

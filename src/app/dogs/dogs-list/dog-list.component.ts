import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Tasks:
 * 1. Get the list of dogs for display.
 * 2. Handle limit and pagination changes from the template.
 * 3. Generate a link for when a dog title is clicked, to route to the DogComponent.
 * 4. Handle input from the searchInput form control that will replace the getDogs API list, with a searchDogs list based on the inputs value.
 *    4.1 When the search field is empty, display the getDogs API list again.
 */
@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  searchInput = new FormControl();
  queryLimit = new FormControl(10);

  constructor() {}

  ngOnInit() {}
}

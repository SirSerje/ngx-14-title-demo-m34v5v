import { Component, OnInit } from '@angular/core';

/**
 * Tasks:
 * 1. Get the dogId from the route params, and use the dog service to query that dogs data to display in the template.
 */
@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

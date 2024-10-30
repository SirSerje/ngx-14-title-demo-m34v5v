import { Injectable } from '@angular/core';

/**
 * Tasks:
 * 1. Have queries use the BaseDataCachingService.
 * 2. Create a getDogs$ query using `https://api.thedogapi.com/v1/breeds?api_key=${DOG_API_KEY}&offset=0&limit=10`.
 *    2.1 The getDogs$ should allow for pagination and limit set from the DogsListComponent in URL parameters.
 * 3. Create a getDog$ query using `https://api.thedogapi.com/v1/breeds/${id}?api_key=${DOG_API_KEY}`.
 * 4. Create a searchDogs$ query using `https://api.thedogapi.com/v1/breeds/search?api_key=${DOG_API_KEY}&q=${value}`
 */

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor() {}
}

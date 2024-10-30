import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Tasks:
 * 1. Create a variable that will allow the service to cache observable results (value) associated with a url (key).
 * 2. Create a getData query that accepts a url to query, and a useCache flag (default true) to circumvent caching.
 * 3. If the cache exists, return the result, without re-querying the API.
 * 4. Gracefully handle errors, and return an observable that will allow the query to return empty data.
 * 5. Create a clearCache method that will either clear the entire cache, or just one entry if a key is supplied.
 */

@Injectable()
export abstract class BaseDataCachingService<T> {
  constructor(private http: HttpClient) {}
}

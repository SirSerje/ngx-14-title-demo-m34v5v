import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Tasks:
 * 1. Create a method that queries the user from './assets/users.json'.
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
}

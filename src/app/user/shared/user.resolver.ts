import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {}
}

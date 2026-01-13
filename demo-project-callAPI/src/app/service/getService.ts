import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResponse } from '../response/apiResponse';
import { pageResponse } from '../response/pageResponse';
import { userResponse } from '../response/userResponse';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetService {
  constructor(private http: HttpClient) {}

  getAll(body: Object): Observable<apiResponse<pageResponse<userResponse>>> {
    return this.http.post<apiResponse<pageResponse<userResponse>>>(
      'http://localhost:8080/users/search',
      body
    );
  }
}

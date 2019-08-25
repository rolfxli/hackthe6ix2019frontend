import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UrlsService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getURL() {
    return this.http.get('${this.uri}/urls');
  }
}

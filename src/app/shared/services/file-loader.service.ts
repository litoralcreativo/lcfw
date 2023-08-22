import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileLoaderService {
  constructor(private http: HttpClient) {}

  loadFileContent(filePath: string): Observable<string> {
    return this.http.get(filePath, { responseType: 'text' });
  }
}

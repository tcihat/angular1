import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClass } from '../interfaces/class.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }

  getClasses() {
    return this.httpClient.get<IClass[]>('https://api.zaguru.com/api/Classes/getClasses');
  }
}

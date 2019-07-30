import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CausalHelperService {

  BASE_URI = "http://localhost:5001/api/";

  constructor(private http: HttpClient) { }



}

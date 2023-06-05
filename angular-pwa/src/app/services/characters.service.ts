import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private API_KEY: string; 
  private BASE_URL:string;
 
  //https://gateway.marvel.com:443/v1/public/characters?apikey=5249c7e5ecdad96fa167cdf8e86605ea
  constructor(private http:HttpClient) {
    this.API_KEY = '5249c7e5ecdad96fa167cdf8e86605ea';
    this.BASE_URL =  "https://gateway.marvel.com:443";
   }


  getAllCharacters(): Observable<ApiResponse> {
    const url = this.BASE_URL + '/v1/public/characters?apikey=' + this.API_KEY;
    console.log(url);
    return this.http.get<ApiResponse>(url); 
  }

  

}

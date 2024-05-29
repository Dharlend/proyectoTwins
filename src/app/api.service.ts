import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class PelisService{
  urlApi='https://api.themoviedb.org/3/';
  apiKey='api_key=585729e2ee1cf400136f5f20179f92f2'
  constructor(private http: HttpClient){}
  getPelis(){
    return this.http.get(`${this.urlApi}movie/popular/?${this.apiKey}&lenguage=es-ES&page=1`);
  }
}


export class AnimeService{
  apiurl='https://restcountries.com/v3.1';
  constructor(private api: HttpClient){}
  getAnimes(){
    return this.api.get(`${this.apiurl}/all`)
  }
}

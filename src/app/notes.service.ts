import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }
  getData(){
    let url = 'https://raw.githubusercontent.com/princev89/AKTUPrep/main/3cseb.json';
    return this.http.get(url);
  }
}

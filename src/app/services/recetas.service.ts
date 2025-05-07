import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Recetas } from '../models/recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http:HttpClient, private global:GlobalService) { }


  getAllRecetas(){
    return this.http.get<Recetas[]>(`${this.global.URL}/recetas/allRecetas`)
  }
}

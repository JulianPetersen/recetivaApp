import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient,private global:GlobalService) { }



  getAllRecetas(){
    return this.http.get<Categorie[]>(`${this.global.URL}/categoriaRecetas`)
  }
}

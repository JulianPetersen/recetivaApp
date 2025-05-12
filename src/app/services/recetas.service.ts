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

  getRecetasPorCategoria(categoriaId: string) {
    return this.http.get<Recetas[]>(`${this.global.URL}/recetas/byCategoria/${categoriaId}`);
  }

  getRecetasPaginadas(page: number, limit: number = 10) {
    return this.http.get<any>(`${this.global.URL}/recetas?page=${page}&limit=${limit}`);
  }

  getRecetasPorCategoriaPaginado(categoryId: string, page: number, limit: number = 10) {
    return this.http.get<any>(`${this.global.URL}/recetas/byCategory/${categoryId}?page=${page}&limit=${limit}`);
  }
}

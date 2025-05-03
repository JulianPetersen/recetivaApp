import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  
  searchText:string="";
  categorias: string[] = ['Categorías', 'Tiempo', 'Dificultad','ensaladas','guisos','con arroz',];

  recetas = [
    {
      nombre: 'Pasta Carbonara',
      tiempo: '30 min',
      imagen: 'assets/img/pasta-carbonara.jpg',
    },
    {
      nombre: 'Tarta de Manzana',
      tiempo: '1h',
      imagen: 'assets/img/tarta-manzana.jpg',
    },
    {
      nombre: 'Tarta de Manzana',
      tiempo: '1h',
      imagen: 'assets/img/tarta-manzana.jpg',
    },
    {
      nombre: 'Tarta de Manzana',
      tiempo: '1h',
      imagen: 'assets/img/tarta-manzana.jpg',
    },
    // Agrega más recetas aquí...
  ];

  constructor() { 
    
  }


  ngOnInit(){

  }

  
}

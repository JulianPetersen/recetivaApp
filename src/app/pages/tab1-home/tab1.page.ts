import { Component } from '@angular/core';
import { Recetas } from 'src/app/models/recetas';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  
  searchText:string="";
  categorias: string[] = ['Categorías', 'Tiempo', 'Dificultad','ensaladas','guisos','con arroz',];

  recetas:Recetas[] = [];

  ChipselectedCategories: string[] = [];
  constructor(private receta:RecetasService) { 
    
  }


  ngOnInit(){
    this.getAllRecetas();
  }



  getAllRecetas(){
    this.receta.getAllRecetas()
      .subscribe({
        next:((res:Recetas[]) => {
          console.log('recetas obtenidas',res);
          this.recetas = res
        }),
        error : ((err) => {
          console.log(err);
        })
      })
  }

  toggleCategory(cat: string) {
    const index = this.ChipselectedCategories.indexOf(cat);
    if (index > -1) {
      // Ya estaba seleccionada, la quitamos
      this.ChipselectedCategories.splice(index, 1);
    } else {
      // No estaba seleccionada, la agregamos
      this.ChipselectedCategories.push(cat);
    }
    console.log(cat)
  }
}

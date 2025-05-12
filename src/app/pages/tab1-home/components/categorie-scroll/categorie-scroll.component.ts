import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categorie-scroll',
  templateUrl: './categorie-scroll.component.html',
  styleUrls: ['./categorie-scroll.component.scss'],
  standalone:false
})
export class CategorieScrollComponent  implements OnInit {

  categorias: Categorie[] = [];
  selectedCategoryId: string | null = null;
  @Output() categoriaSeleccionada = new EventEmitter<string | null>();

  constructor(private categories:CategoriesService) { }

  ngOnInit() {
    this.getAllcategories();
  }



  toggleCategory(catId: string) {
    if (this.selectedCategoryId === catId) {
      this.selectedCategoryId = null;
    } else {
      this.selectedCategoryId = catId;
    }
  
    this.categoriaSeleccionada.emit(this.selectedCategoryId);
  }


  getAllcategories(){
    this.categories.getAllRecetas()
      .subscribe({
        next: ((res:Categorie[]) => {
          this.categorias = res;
          console.log(res)
        }),
        error:((err) => {
          console.log(err)
        })
      })
  }

}

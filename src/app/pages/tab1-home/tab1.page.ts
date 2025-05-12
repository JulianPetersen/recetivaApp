import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { Recetas } from 'src/app/models/recetas';
import { CategoriesService } from 'src/app/services/categories.service';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
  
 export class Tab1Page {
  searchText: string = "";
  categoriaSeleccionadaId: string | null = null;
  recetas: Recetas[] = [];

  currentPage = 1;
  totalPages = 1;
  isLoading = false;

  constructor(private recetaService: RecetasService) {}

  ngOnInit() {
    this.loadRecetas();
  }

  loadRecetas(reset: boolean = false) {
    if (reset) {
      this.currentPage = 1;
      this.recetas = [];
    }

    this.isLoading = true;

    const serviceCall = this.categoriaSeleccionadaId
      ? this.recetaService.getRecetasPorCategoriaPaginado(this.categoriaSeleccionadaId, this.currentPage)
      : this.recetaService.getRecetasPaginadas(this.currentPage);

    serviceCall.subscribe(res => {
      this.recetas = [...this.recetas, ...res.docs];
      this.totalPages = res.totalPages;
      this.isLoading = false;
    });
  }

  loadMore(event: any) {
    if (this.currentPage >= this.totalPages) {
      event.target.disabled = true;
      return;
    }

    this.currentPage++;
    this.loadRecetas();
    event.target.complete();
  }

  filtrarPorCategoria(categoriaId: string | null) {
    this.categoriaSeleccionadaId = categoriaId;
    this.recetas = [];
    this.currentPage = 1;
    this.loadRecetas(true);
  }
}


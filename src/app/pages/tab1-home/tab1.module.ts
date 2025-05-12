import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ListRecetasComponent } from './components/list-recetas/list-recetas.component';
import { CategorieScrollComponent } from './components/categorie-scroll/categorie-scroll.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    

  ],
  declarations: [Tab1Page,ListRecetasComponent,CategorieScrollComponent],
  exports:[

  ]
})
export class Tab1PageModule {}

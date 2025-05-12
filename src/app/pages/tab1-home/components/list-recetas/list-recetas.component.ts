import { Component, Input, OnInit } from '@angular/core';
import { IonGrid } from "@ionic/angular/standalone";
import { Recetas } from 'src/app/models/recetas';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-list-recetas',
  templateUrl: './list-recetas.component.html',
  styleUrls: ['./list-recetas.component.scss'],
  standalone:false
})
export class ListRecetasComponent  implements OnInit {

  @Input() recetas: Recetas[] = [];


  constructor(private receta:RecetasService) { }


  ngOnInit() {
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



}

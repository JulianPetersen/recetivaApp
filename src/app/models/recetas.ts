import { Categorie } from "./categorie"
import { Nutricionista } from "./nutricionista"

export interface Recetas {
    _id?:string,
    title:string,
    img:string,
    arrayIngredientes:string[],
    instrucciones:string,
    nutricionista:Nutricionista,
    arrayCategory:Categorie[]
}


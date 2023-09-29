import {AfterViewInit, Component,ViewChild } from '@angular/core';
import { RockectService } from 'src/app/rockect.service';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



import { Products } from 'src/app/Interfaces/products';


interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface Prod {
  name: string;
    description:string;
    sku:number;
    imagen:string;
    type:string;
    price:number;
}

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']

})


export class ShowComponent {


  displayedColumns:  string[] = ['imagen','name','sku','precio','action'];


  dataSource = new MatTableDataSource<any>(this.superApi.productsempty);
    

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public superApi: RockectService) {}


  search:string=''


  ngOnInit(): void {
    this.superApi.getProducts();

    
  }

  ngAfterViewInit() {
  
    this.dataSource.paginator = this.paginator;
   
  }



  onInputChange() {

    console.log(this.search);


    const resultadosFiltrados = this.superApi.productsempty.filter(objeto => {
      // Convertimos el nombre y el nombre del objeto a minúsculas para hacer una comparación sin distinción entre mayúsculas y minúsculas
      const nombreEnMinusculas = this.search.toLowerCase();
      const nombreObjetoEnMinusculas = objeto.name.toLowerCase();
      
      // Verificamos si el nombre del objeto contiene el nombre a filtrar
      return nombreObjetoEnMinusculas.includes(nombreEnMinusculas);
    });

    this.superApi.productsempty = resultadosFiltrados;

    if(this.search.length<3){
      this.superApi.getProducts();
    }
  

  }



}

import {AfterViewInit, Component,ViewChild } from '@angular/core';
import { RockectService } from 'src/app/rockect.service';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



import { Products } from 'src/app/Interfaces/products';



interface Prod {
 
    _id:string;
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

  constructor(public superApi: RockectService) {}



  dataSource = new MatTableDataSource<any>();



  displayedColumns:  string[] = ['imagen','name','sku','precio','action'];

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


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
      
      const nombreEnMinusculas = this.search.toLowerCase();
      const nombreObjetoEnMinusculas = objeto.name.toLowerCase();
      
      return nombreObjetoEnMinusculas.includes(nombreEnMinusculas);
    });

    this.superApi.productsempty = resultadosFiltrados;

    if(this.search.length<3){
      this.superApi.getProducts();
    }
  

  }



}

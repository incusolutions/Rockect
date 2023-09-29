import { Component } from '@angular/core';
import { RockectService } from 'src/app/rockect.service'; 

import { Products } from 'src/app/Interfaces/products';
import { NewProducts } from 'src/app/Interfaces/newproducts';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  constructor(public superApi: RockectService) {}




  objectNewProduct:NewProducts={

    name: '',
    description:'',
    sku:0,
    imagen:'',
    type:'',
    price:0

  }

  newProduct(){
    if(this.objectNewProduct.name=='' || this.objectNewProduct.description=='' || this.objectNewProduct.sku==0 || this.objectNewProduct.imagen =='' || this.objectNewProduct.imagen =='' || this.objectNewProduct.price ==0  ){
        console.log('algo esta vacio');
    }
    this.superApi.newPro(this.objectNewProduct);

    
    
  }


}

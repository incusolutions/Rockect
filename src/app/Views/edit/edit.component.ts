import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products } from 'src/app/Interfaces/products';
import { RockectService } from 'src/app/rockect.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(public superApi: RockectService, private route: ActivatedRoute) {}


  objectProduct:Products={
    _id:'', 
    name: '',
    description:'',
    sku:0,
    imagen:'',
    type:'',
    price:0

  }

  id: string = '';


  editProduct(){
    this.superApi.updateProduct(this.objectProduct._id,this.objectProduct,this.superApi.copyOlds);
  }


  ngOnInit(){
 
    // se recupera parametro ID
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    // se usa el metodo search en servicio q busca la info de un solo astro
    this.superApi.search(this.id);
    // se guarda en el objeto vacio para usarlo como modelo en el formualrio
    this.objectProduct = this.superApi.getOneProduct;
    console.log(this.superApi.getOneProduct, 'doc');

  }


}

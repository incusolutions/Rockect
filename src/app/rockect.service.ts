import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import {showLoadingMessage, showMessage, showMessageWithRedirect } from 'src/app/helpers/messages';

import { environment } from 'src/enviroments/environment';


import { Products } from './Interfaces/products';
import { NewProducts } from './Interfaces/newproducts';

@Injectable({
  providedIn: 'root'
})
export class RockectService {

  constructor(private router: Router) { }

  productsempty:Products[] = [];

  productscopy:any[] = [];

  getOneProduct:Products={
    _id:'',
    name: '',
    description:'',
    sku:0,
    imagen:'',
    type:'',
    price:0

  }

  copyOlds:any = {}

  getProducts(){
    axios.get(`${environment.url}/getAll`, { 
        headers: { "Content-Type": "application/json"
    } }
    ).then(succ => {

      this.productsempty = succ.data;
     
    }).catch(error => {
      console.log(error)
    });

 
  }

  // metodo que busca por id dentro del arreglo, es disparado en el momento de dar en el boton de editar
  search (id:string) {
     
    let getone = this.productsempty.filter(item => item._id == id);
    this.getOneProduct = getone[0];


    this.copyOlds = {...this.getOneProduct};

   
  }


  updateProduct(id:string,obj:Products,oldobj:Products ){

     axios.patch(`${environment.url}/update/`+id, JSON.stringify(obj),{
       headers: { "Content-Type": "application/json" }
     
     }).then(success=>{
        
         console.log(success)
         showMessage( "¡Actualización Exitosa!","Se ha actualizado prodcutos", "success");

         this.router.navigate(['']);
        // Swal.close();
     }).catch(error=>{
   
       console.log(error)

     });

     if(obj.price != oldobj.price || obj.sku != oldobj.sku){
         this.logchanges(obj,oldobj)
     }

    


  } 

  logchanges(obj:Products,oldobj:Products){

      const log={
        date: new Date(),
        product_id: obj._id,
        productname:obj.name,
        newprice:obj.price,
        oldprice:oldobj.price,
        newsku:obj.sku,
        oldsku:oldobj.sku
    
      }
      console.log(JSON.stringify(obj));
      console.log(oldobj);

      axios.post(`${environment.url}/logchange/` ,JSON.stringify(log),{
       headers: { "Content-Type": "application/json" }
     
     }).then(success=>{
         console.log(success)
       //  showMessage( "¡Actualización Exitosa!","Se ha actualizado prodcutos", "success");
       //  this.router.navigate(['']);
       console.log('--enviado log---')
      
     }).catch(error=>{
         console.log(error)
     });




  }

  deleteProduct(id:string ){

    console.log(id);
    

    axios.delete(`${environment.url}/delete/`+id, {
      headers: { "Content-Type": "application/json" }
    
    }).then(success=>{
       
        console.log(success)
        showMessage( "¡Actualización Exitosa!","Se ha borrado prodcuto", "success");

        this.router.navigate(['']);
        this.getProducts();
       // Swal.close();
    }).catch(error=>{
  
      console.log(error)

    });
 } 


 newPro(obj:NewProducts){

  axios.post(`${environment.url}/new/`,JSON.stringify(obj),{
    headers: { "Content-Type": "application/json" },
  }).then(success=>{
    showMessage( "Se crea nuevo producto!","nuevo producto", "success");

    console.log(success);
    this.router.navigate(['']);
    
  }).catch(error=>{
    showMessage( "Error creando producto!","error producto", "error");

    console.log(error)

  });

 }






}

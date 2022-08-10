import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.productService.products = data.products;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createproduct(form: NgForm) {

    if(form.value._id){

      const { _id, code, name, price, description, stock, image } = form.value

      if(!code || !name || price === 0 || !description || stock === 0 || !image ){
        alert("Debes diligenciar todos los campos")
        return
      }

      const data = {code, name, price, description, stock, image}

      this.productService.updateProduct(_id, data).subscribe(
        (data: any)=>{
          alert("Producto Actualizado")
          this.getProducts()
          form.reset(form)
          this.productService.currentProduct = new Product()
        },
        (error)=> {
          console.log(error)
        }
      )

      return
    }

    const { description, image, name, stock, price, code } = form.value

    if(!code || !description || !image || !name || stock === 0 || price === 0){
      alert("Debes diligenciar todos los campos")
      return
    }

    const data = {code, description, image, name, stock, price}

    this.productService.createProduct(data).subscribe(
      (data) => {
        alert("Producto Creado con exito")
        form.reset()
        this.productService.currentProduct = new Product()
        this.getProducts()
      },
      (error) => {
        console.log(error)
      }
    )

    console.log(form.value);
  }

  deleteProduct(_id: string){

    const opt = confirm("Estas seguro que deseas eliminar este producto")

    if(!opt) return

    this.productService.deleteProduct(_id).subscribe(
      (data)=> {
        this.getProducts()
        alert("Producto Eliminado")
      },
      (error) => {
        console.log(error)
      }
    )

    return

  }

  updateProduct(product: Product){
    this.productService.currentProduct = product
  }

}


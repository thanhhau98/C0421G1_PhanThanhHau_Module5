import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  productEdit: Product;
  constructor(
    private activedRouter: ActivatedRoute ,
    private productService: ProductService
  ) {
    activedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.productForm.setValue(this.productService.findById(id));
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product);
    this.productForm.reset();
  }
}

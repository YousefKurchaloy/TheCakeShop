import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageMode } from 'src/app/shared/enums/PageMode';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css'],
})
export class ProductAddEditComponent implements OnInit {
  pageModeEnum = PageMode;
  productId: number = 0;
  pageMode: PageMode = PageMode.Create;
  productForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    description: ['', Validators.required],
    productPrice: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productSvc: ProductService
  ) {}

  ngOnInit(): void {
    this.setPageMode();

    if (this.pageMode == PageMode.Edit) {
      this.preparePageForEditMode();
    }
  }

  addEditProduct(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;

      if (this.pageMode == PageMode.Create) {
        this.productSvc.createProduct(product).subscribe((res) => {
          this.router.navigate(['/products']);
        });
      } else {
        this.productSvc.editProduct(product).subscribe((res) => {
          this.router.navigate(['/products']);
        });
      }
    }
  }

  //#region Private functions

  preparePageForEditMode() {
    this.productSvc
      .getProduct(this.productId)
      .subscribe((productFromServer) => {
        this.productForm.patchValue({
          id: productFromServer.id,
          name: productFromServer.name,
          description: productFromServer.description,
          productPrice: productFromServer.productPrice,
        });
      });
  }

  private setPageMode(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.productId = Number(this.route.snapshot.paramMap.get('id'));
      this.pageMode = PageMode.Edit;
    }
  }

  //#endregion
}

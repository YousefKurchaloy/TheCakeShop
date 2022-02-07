import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../shared/models/Product';
import { ProductDeleteDialogComponent } from './product-delete-dialog/product-delete-dialog.component';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products!: Product[];
  showSpinner: boolean = true;

  constructor(private productSvc: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getProducts();
  }

  deleteProduct(id: number): void {
    const dialogRef = this.dialog.open(ProductDeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productSvc.deleteProduct(id).subscribe(
          (res) => {
            this.getProducts();
          },
          (err) => {
            console.error;
          }
        );
      }
    });
  }
  //#region Private Functions

  private getProducts(): void {
    this.productSvc.getProducts().subscribe((productsFromServer) => {
      this.products = productsFromServer;
      this.showSpinner = false;
    });
  }
  //#endregion
}

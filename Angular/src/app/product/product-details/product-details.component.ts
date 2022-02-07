import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  showSpinner: boolean = true;

  constructor(
    private productSvc: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var productId = Number(this.route.snapshot.paramMap.get('id'));

    this.productSvc.getProduct(productId).subscribe((res) => {
      this.product = res;
      this.showSpinner = false;
    });
  }
}

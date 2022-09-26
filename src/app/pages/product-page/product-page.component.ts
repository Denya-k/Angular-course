import { ModalService } from './../../services/modal.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'angular crash';
  // products: IProduct[] = [];
  loading = false;
  // products$: Observable<IProduct[]>
  term = ''

constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // );
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    })
  }
}

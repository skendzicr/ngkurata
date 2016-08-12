import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductFilterPipe } from "./product-filter.pipe";
import { StarComponent } from "../shared/star.component";
import { ProductService}from "./product.service";

@Component({
	// moduleId: module.id,
	selector: 'pm-products',
	templateUrl: 'app/products/product-list.component.html',
    styleUrls: ["app/products/product-list.component.css"],
    pipes: [ ProductFilterPipe ],
    directives: [StarComponent],
    providers: [ProductService]
    
})
export class ProductListComponent implements OnInit {
	pageTitle: string =" Product list";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";
    products: IProduct[];
        
constructor(private _productService: ProductService)
{
};

toggleImage(): void{
    this.showImage = !this.showImage;
}

ngOnInit():void{
this._productService.getProducts()
.subscribe(
    products => this.products = products,
    error => this.errorMessage = <any>error
); 
}

onRatingClicked(message:string):void{
    this.pageTitle = "Product list: " + message;
}
	

}
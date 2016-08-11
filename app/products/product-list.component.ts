import { Component, OnInit } from '@angular/core';

@Component({
	// moduleId: module.id,
	selector: 'pm-products',
	templateUrl: 'app/products/product-list.component.html',
})
export class ProductListComponent implements OnInit {
	pageTitle: string = "Product list";
	constructor() { }
	ngOnInit() { }

}
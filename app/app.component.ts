import { Component, OnInit } from '@angular/core'; 
import { HTTP_PROVIDERS } from "@angular/http";

import{ ProductListComponent } from './products/product-list.component'; 
import{ ProductService } from './products/product.service'; 
 
@Component({
	// moduleId: module.id,
	selector: 'pm-app',
	templateUrl: './app/app.component.html',
	directives:[ProductListComponent],
	providers:[ProductService,HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
	pageTitle: string = "ACME Product Management";
	constructor() { }

	ngOnInit() { }

}
